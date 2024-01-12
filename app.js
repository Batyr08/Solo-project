require('@babel/register');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const express = require('express');
const logger = require('morgan');
const path = require('path');
const { secureRoute, checkUser } = require('./src/middlewares/common');

const sessionConfig = {
  name: 'Solo',
  store: new FileStore(),
  secret: 'Halmgood',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999,
    httpOnly: true,
  },
};

const mainRouter = require('./src/routes/main')
const regRouter = require('./src/routes/reg')
const logRouter = require('./src/routes/log')
const profileRouter = require('./src/routes/profile')
const reviewRouter = require('./src/routes/review');
const aboutRouter = require('./src/routes/about');

const app = express();
const PORT = 3300;
app.use(session(sessionConfig));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/', mainRouter)
app.use('/register', secureRoute, regRouter)
app.use('/login', secureRoute, logRouter)
app.use('/profile', profileRouter)
app.use('/addreview', reviewRouter)
app.use('/info', aboutRouter)
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
