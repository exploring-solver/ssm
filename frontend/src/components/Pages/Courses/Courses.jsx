import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Courses() {
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const response = await axios.get('/youtube/check-subscription', { withCredentials: true });
        setSubscriptionStatus(response.data.isSubscribed);
      } catch (error) {
        console.error('Error checking subscription:', error);
        if (error.response && error.response.status === 401) {
          alert('Your session has expired. Please login again.');
          navigate('/login');
        } else {
          setError('Failed to check subscription status. Please try again later.');
        }
      }
    };

    checkSubscription();
  }, [navigate]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Courses</h2>
      {subscriptionStatus === null ? (
        <p>Checking subscription status...</p>
      ) : subscriptionStatus ? (
        <div>
          <p>You are subscribed! Here are your courses:</p>
          {/* Add your course content here */}
        </div>
      ) : (
        <div>
          <p>Please subscribe to our YouTube channel to access courses.</p>
          <a href="https://www.youtube.com/channel/YOUR_CHANNEL_ID" target="_blank" rel="noopener noreferrer">
            Subscribe Now
          </a>
        </div>
      )}
    </div>
  );
}

export default Courses;