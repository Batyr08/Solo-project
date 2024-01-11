const express = require('express');
const renderTemplate = require('../lib/render');
const Main = require('../views/Main');
const {Review} = require('../../db/models')

const mainRouter = express.Router();

// mainRouter.get('/', (req, res) => {
//   const { login } = req.session;
//   renderTemplate(Main, { login }, res);
// });

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

mainRouter.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("Solo");
    res.redirect("/");
  });
});

module.exports = mainRouter;
