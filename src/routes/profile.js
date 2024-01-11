const express = require('express');
const renderTemplate = require('../lib/render');
const Profile = require('../views/Profile');
const Edit = require('../views/Edit');
const { User, Review } = require('../../db/models');

const profileRouter = express.Router();

profileRouter.get('/', async (req, res) => {
  console.log(req.session);
  const { login } = req.session;
  const user = await User.findOne({ where: { login } });
  if (!user) {
    return res.status(404).send('User not found');
  }
  const userReview = await Review.findAll({
    where: { user_id: user.id }
  });
  console.log(userReview.length);
  renderTemplate(Profile, { login, userReview }, res);
});

profileRouter.get('/:id/edit', async (req, res) => {
  const { login } = req.session;
  const { id } = req.params;
  const edit = await Review.findByPk(id, { plain: true });
  renderTemplate(Edit, { login, edit }, res);
});

profileRouter.put('/:id', async (req, res) => {
  const { login } = req.session;
  const { id } = req.params;
  const { name, place, type, averagePrice, description, pictureLink, mapPoint } = req.body;
  await Review.update(
    {
      name,
      place,
      type,
      avg: averagePrice,
      description,
      picture: pictureLink,
      map: mapPoint
    },
    {
      where: { id }
    }
  );
  res.json({ msg: 'Review has been edited successfully' });
});

profileRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Review.destroy({ where: { id } });
    res.json({ msg: 'Review has been deleted successfully' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = profileRouter;
