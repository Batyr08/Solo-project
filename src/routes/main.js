const express = require('express');
const renderTemplate = require('../lib/render');
const Main = require('../views/Main');
const { Review, Comment, User } = require('../../db/models');

const mainRouter = express.Router();

mainRouter.get('/', async (req, res) => {
  try {
    const { login } = req.session;
    const reviews = await Review.findAll();
    console.log(reviews);
    renderTemplate(Main, { login, reviews }, res);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).send('Internal Server Error');
  }
});

mainRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('Solo');
    res.redirect('/');
  });
});

mainRouter.post('/profile/:id', async (req, res) => {
  const { id } = req.params;
  // console.log(req.params)
  try {
    const { login } = req.session;
    const { comment } = req.body;
    // console.log(req.body);
    const userIdComment = await User.findAll({ where: { login } });
    const reviewIdComment = await Review.findOne({ where: { id } });
    const userComment = await Comment.create({
      comment,
      user_id: userIdComment.id,
      review_id: reviewIdComment.id
    });
    console.log(userComment);
    res.json({ msg: 'Review has been commented successfully' });
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
});

module.exports = mainRouter;
