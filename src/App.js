// src/App.js
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
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/Config";

function ProtectedRoute({ isAuthenticated }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

function PublicRoute({ isAuthenticated }) {
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const token = await user.getIdToken();
          localStorage.setItem("authToken", token);
          setIsAuthenticated(true);
        } catch (error) {
          console.error("Error getting user token:", error);
          localStorage.removeItem("authToken");
          setIsAuthenticated(false);
        }
      } else {
        localStorage.removeItem("authToken");
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/login" element={<SignInPage />} />
          <Route
            path="/register"
            element={
              <RegisterPage
                onNavigateToSignIn={() => (window.location.href = "/login")}
              />
            }
          />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<DePINDashboard />} />
          <Route path="/help" element={<HelpCenter />} />
        </Route>

        {/* Updated root route to redirect to register page first */}
        <Route
          path="/"
          element={
            <Navigate
              to={isAuthenticated ? "/dashboard" : "/register"}
              replace
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
