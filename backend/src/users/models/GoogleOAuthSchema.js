const mongoose = require('../../../services/mongoose');

const googleOAuthSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    accessToken: String,
    refreshToken: String,
    expiryDate: Date,
  },
  { timestamps: true }
);

const GoogleOAuth = mongoose.model('GoogleOAuth', googleOAuthSchema);

module.exports = GoogleOAuth;
