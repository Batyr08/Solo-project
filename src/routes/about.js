const express = require('express');
const renderTemplate = require('../lib/render');
const About = require('../views/About');

const aboutRouter = express.Router();

aboutRouter.get('/', (req, res) => {
  const { login } = req.session;
  renderTemplate(About, { login }, res);
});

module.exports = aboutRouter;