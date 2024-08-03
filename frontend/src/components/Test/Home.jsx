import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home({ isAuthenticated }) {
  const handleLogout = async () => {
    try {
      await axios.get('/auth/logout', { withCredentials: true });
      window.location.reload();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {isAuthenticated ? (
        <>
          <Link to="/courses">Go to Courses</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}

export default Home;