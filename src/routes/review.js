const express = require('express');
const renderTemplate = require('../lib/render');
const ReviewPage = require('../views/Review');

const reviewRouter = express.Router();
const { Review, User } = require('../../db/models');

reviewRouter.get('/', (req, res) => {
  const { login } = req.session;
  renderTemplate(ReviewPage, { login }, res);
});

reviewRouter.post('/', async (req, res) => {
  try {
    const { login } = req.session;
    const user = await User.findOne({ where: { login } });
    const { name, place, type, averagePrice, description, pictureLink, mapPoint } = req.body;
    if (!name || !place || !type || !averagePrice || !description || !pictureLink || !mapPoint ) {
      return res.status(400).send('All fields are required');
    }
    const newReview = await Review.create({
      name,
      place,
      type,
      avg: averagePrice,
      description,
      picture: pictureLink,
      map: mapPoint,
      user_id: user.id
    });
    console.log(newReview);
    res.json({ msg: "Review added successfully" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = reviewRouter;
