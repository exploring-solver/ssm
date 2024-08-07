const express = require('express');
const bodyParser = require('body-parser');
const expressip = require('express-ip');
const session = require('express-session');
const passport = require('./config/passport');
const cors = require('cors');

const app = express();
const allowedOrigins = [`${process.env.FRONTEND_URL}`];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true, // Enable the Access-Control-Allow-Credentials header
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(expressip().getIpInfoMiddleware);
app.use(passport.initialize());
app.use(passport.session());

require('./routes')(app);

module.exports = app;
