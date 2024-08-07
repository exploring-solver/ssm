const { google } = require('googleapis');
const GoogleOAuth = require('../models/GoogleOAuthSchema');
const User = require('../models/mongoose');

const youtube = google.youtube('v3');

exports.checkSubscription = async (req, res) => {
  console.log('checkSubscription function called');

  try {
    const userId = req.user.id;
    // console.log('User ID:', userId);

    const channelId = process.env.YOUTUBE_CHANNEL_ID;
    // console.log('YouTube Channel ID:', channelId);

    const googleOAuth = await GoogleOAuth.findOne({ userId });
    // console.log('Google OAuth Data:', googleOAuth);

    if (!googleOAuth) {
      console.log('User not authenticated with Google');
      return res.status(401).json({ message: 'User not authenticated with Google' });
    }

    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({
      access_token: googleOAuth.accessToken,
      refresh_token: googleOAuth.refreshToken,
    });
    console.log('OAuth2 Client credentials set');

    const response = await youtube.subscriptions.list({
      auth: oauth2Client,
      part: 'snippet',
      mine: true,
      forChannelId: channelId,
    });
    // console.log('YouTube API response:', response.data);

    const isSubscribed = response.data.items.length > 0;
    // console.log('Is Subscribed:', isSubscribed);

    await User.findByIdAndUpdate(userId, { isSubscribed });
    // console.log('User subscription status updated in the database');

    res.json({ isSubscribed });
  } catch (error) {
    console.error('Error checking subscription:', error);
    res.status(500).json({ message: 'Error checking subscription' });
  }
};
