import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Util/Navbar/Header";
import StudioInfo from "./components/Util/StudioInfo";
import HomePage from "./components/Pages/Home/HomePage";
import AboutPage from "./components/Pages/About/AboutPage";
import Error404 from "./components/Util/Error404";
import Courses from "./components/Pages/Courses/Courses";
import Login from "./components/Auth/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import BlogPage from "./components/Pages/Blog/BlogPage";
import ServicesPage from "./components/Pages/Services/ServicesPage";
import SoundKitsPage from "./components/Pages/SoundKits/SoundKitsPage";
import ContactInfo from "./components/Util/ContactInfo";
import SubscriptionBox from "./components/Auth/SubscriptionBox";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users/check-subscription', { withCredentials: true });
        setIsAuthenticated(true);
        setIsSubscribed(response.data.isSubscribed);
      } catch (error) {
        setIsAuthenticated(false);
        setIsSubscribed(false);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthStatus();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setIsSubscribed={setIsSubscribed}/>
      <Routes>
        <Route path="/" element={<HomePage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/soundkits" element={<SoundKitsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/404" element={<Error404 />} />
        
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} isSubscribed={isSubscribed} />}>
          <Route path="/courses" element={<Courses isSubscribed={isSubscribed}/>} />
          {/* Add other protected routes here */}
        </Route>
        <Route path="/subscribe" element={<SubscriptionBox />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <ContactInfo/>
      <StudioInfo />
    </BrowserRouter>
  );
}

export default App;
