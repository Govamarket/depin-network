import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Chrome,
  Eye,
  EyeOff,
  Shield,
  Network,
} from "lucide-react";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../Firebase/auth";
import BackgroundEffects from "../Shared/BackgroundEffects";
import { getAuth, signOut } from "firebase/auth"; // <-- Import for signOut

const RegisterPage = ({ onNavigateToSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await doSignInWithGoogle();
      // No alert needed - auth state listener handles redirect
    } catch (error) {
      setError(error.message || "Failed to authenticate with Google");
      console.error("Google Auth Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validation checks
    if (!formData.acceptTerms) {
      setError("You must accept the terms and conditions");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);
    try {
      await doCreateUserWithEmailAndPassword(formData.email, formData.password);

      // Sign out the user after registration
      const auth = getAuth();
      await signOut(auth);

      // Now navigate to the sign-in page
      if (typeof onNavigateToSignIn === "function") {
        onNavigateToSignIn();
      }
    } catch (error) {
      let errorMessage = "Registration failed";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Email is already in use";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password should be at least 6 characters";
      }
      setError(errorMessage);
      console.error("Registration Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <BackgroundEffects />

      <div className="w-full max-w-md mx-auto">
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl">
                <Network className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Join DePIN
            </h1>
            <p className="text-gray-400">
              Create your decentralized infrastructure account
            </p>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 rounded-xl p-3 text-sm mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                  required
                />
              </div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-12 pr-12 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                required
                minLength={6}
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-emerald-500 bg-gray-800 border-gray-600 rounded focus:ring-emerald-500 focus:ring-2"
                required
              />
              <label className="text-sm text-gray-400">
                I agree to the{" "}
                <button
                  type="button"
                  className="text-emerald-400 hover:text-emerald-300 cursor-pointer"
                >
                  Terms of Service
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="text-emerald-400 hover:text-emerald-300 cursor-pointer"
                >
                  Privacy Policy
                </button>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading || !formData.acceptTerms}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02]"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Creating Account...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Create Account
                </div>
              )}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900/50 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleAuth}
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-3 bg-white/10 border border-gray-700 rounded-xl text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-gray-500/50 disabled:opacity-50 transition-all duration-300 group"
            >
              <Chrome className="w-5 h-5 mr-2 group-hover:text-blue-400 transition-colors" />
              Continue with Google
            </button>

            <div className="text-center">
              <p className="text-gray-400">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={onNavigateToSignIn}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  Sign in
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
