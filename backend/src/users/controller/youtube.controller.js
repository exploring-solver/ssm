const { google } = require('googleapis');
const GoogleOAuth = require('../models/GoogleOAuthSchema');
const User = require('../models/mongoose');

const youtube = google.youtube('v3');

exports.checkSubscription = async (req, res) => {
  try {
    const userId = req.user.id;
    const channelId = process.env.YOUTUBE_CHANNEL_ID;

    const googleOAuth = await GoogleOAuth.findOne({ userId });
    if (!googleOAuth) {
      return res
        .status(401)
        .json({ message: 'User not authenticated with Google' });
    }

    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({
      access_token: googleOAuth.accessToken,
      refresh_token: googleOAuth.refreshToken,
    });

    const response = await youtube.subscriptions.list({
      auth: oauth2Client,
      part: 'snippet',
      mine: true,
      forChannelId: channelId,
    });

    const isSubscribed = response.data.items.length > 0;

    await User.findByIdAndUpdate(userId, { isSubscribed });

    res.json({ isSubscribed });
  } catch (error) {
    console.error('Error checking subscription:', error);
    res.status(500).json({ message: 'Error checking subscription' });
  }
};
