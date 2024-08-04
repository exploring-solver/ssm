const mongoose = require('../../../services/mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: String,
    lastName: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      // Password is required only for non-OAuth users
      required: function() {
        return !this.googleId;
      },
    },
    googleId: String,
    accessToken: String,
    refreshToken: String,
    isSubscribed: {
      type: Boolean,
      default: false,
    },
    subscribedChannels: [String],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
