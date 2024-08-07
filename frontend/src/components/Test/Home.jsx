import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home({ isAuthenticated }) {
  const backendurl = import.meta.env.VITE_BACKEND_URL;
  const handleLogout = async () => {
    try {
      // await axios.get('http://localhost:5000/auth/logout', { withCredentials: true });
      window.location.href = `${backendurl}/users/logout`;

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