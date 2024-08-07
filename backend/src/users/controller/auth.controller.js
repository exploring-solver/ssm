const passport = require('passport');
const frontendurl = process.env.FRONTEND_URL;
exports.googleAuth = passport.authenticate('google', {
  scope: [
    'profile',
    'email',
    'https://www.googleapis.com/auth/youtube.force-ssl',
  ],
});

exports.googleAuthCallback = (req, res, next) => {
  passport.authenticate('google', async (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect(`${frontendurl}/login`);
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect(`${frontendurl}/courses`);
    });
  })(req, res, next);
};

exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err); // Properly handle the error
    }
    // Redirect to frontend after logout
    res.redirect(`${frontendurl}`);
  });
};
