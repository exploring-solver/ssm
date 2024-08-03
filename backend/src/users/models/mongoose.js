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
      required: true,
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
