import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import DePINDashboard from "./components/Pages/DePINDashboard";
import HelpCenter from "./components/Support/HelpCenter";
import RegisterPage from "./components/Authenticator/RegisterPage";
import SignInPage from "./components/Authenticator/SignInPage";

// Protected Route Component
function ProtectedRoute({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // This is where Outlet renders the child routes
  return (
    <div className="App">
      <DePINDashboard />
      <Outlet /> {/* Child routes render here */}
    </div>
  );
}

// Public Route Component (for auth pages)
function PublicRoute({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
  {
    /* Auth pages render here */
  }
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status on app load
  useEffect(() => {
    // Check if user is already logged in (e.g., from localStorage, token, etc.)
    const checkAuth = () => {
      const token = localStorage.getItem("authToken");
      setIsAuthenticated(!!token);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes - Only show when NOT authenticated */}
        <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/login" element={<SignInPage onLogin={handleLogin} />} />
          <Route
            path="/register"
            element={<RegisterPage onRegister={handleLogin} />}
          />
        </Route>

        {/* Protected Routes - Only show when authenticated */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<div>Dashboard Content</div>} />
          <Route path="/help" element={<HelpCenter />} />
          {/* Add more protected routes here */}
        </Route>

        {/* Default redirect */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
