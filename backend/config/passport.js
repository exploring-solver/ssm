const passport = require('passport');
const User = require('../src/users/models/mongoose');
const GoogleOAuth = require('../src/users/models/GoogleOAuthSchema');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          user = await User.create({
            googleId: profile.id,
            username: profile.displayName,
            email: profile.emails[0].value,
            name: profile.name.givenName,
            lastName: profile.name.familyName,
          });
        }

        await GoogleOAuth.findOneAndUpdate(
          { userId: user._id },
          {
            accessToken,
            refreshToken,
            expiryDate: new Date(Date.now() + 3600000),
          },
          { upsert: true, new: true }
        );

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;
