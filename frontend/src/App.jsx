import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Util/Navbar/Header";
import StudioInfo from "./components/Util/StudioInfo";
import HomePage from "./components/Pages/Home/HomePage";
import AboutPage from "./components/Pages/About/AboutPage";
import Error404 from "./components/Util/Error404";
import Courses from "./components/Pages/Courses/Courses";
import Login from "./components/Auth/Login";
import Home from "./components/Test/Home";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/auth/check', { withCredentials: true });
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={
          <>
            <HomePage />
          </>
        }
        />
        <Route path="/about" element={
          <>
            <AboutPage />
          </>
        } />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<Error404 />} /> */}
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/courses"
          element={
            isAuthenticated ? <Courses /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
      <StudioInfo />
    </BrowserRouter>
  );
}

export default App;