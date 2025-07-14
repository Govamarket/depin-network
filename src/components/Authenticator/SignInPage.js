import React, { useState } from "react";
import { Wallet, Mail, Lock, Chrome, Eye, EyeOff, Network } from "lucide-react";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../Firebase/auth";
import BackgroundEffects from "../Shared/BackgroundEffects";
import { useNavigate } from "react-router-dom";

const SignInPage = ({ onNavigateToRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [connectedWallet, setConnectedWallet] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await doSignInWithGoogle();
      // No need for alert - the auth state listener will handle the redirect
    } catch (error) {
      setError(error.message || "Failed to sign in with Google");
      console.error("Google Auth Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWalletConnect = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate wallet connection
      setTimeout(() => {
        setConnectedWallet("0x742d...8c4a");
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      setError("Failed to connect wallet");
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await doSignInWithEmailAndPassword(formData.email, formData.password);
      // No need for alert - the auth state listener will handle the redirect
    } catch (error) {
      setError(error.message || "Failed to sign in");
      console.error("Sign in Error:", error);
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
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl">
                <Network className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              DePIN Control
            </h1>
            <p className="text-gray-400">
              Sign in to your decentralized infrastructure
            </p>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 rounded-xl p-3 text-sm mb-4">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300"
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
                  className="w-full pl-12 pr-12 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300"
                  required
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

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-400">
                    Remember me
                  </span>
                </label>
                <button
                  type="button"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02]"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Signing In...
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

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

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={handleGoogleAuth}
                disabled={isLoading}
                className="flex items-center justify-center px-4 py-3 bg-white/10 border border-gray-700 rounded-xl text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-gray-500/50 disabled:opacity-50 transition-all duration-300 group"
              >
                <Chrome className="w-5 h-5 mr-2 group-hover:text-blue-400 transition-colors" />
                Google
              </button>

              <button
                type="button"
                onClick={handleWalletConnect}
                disabled={isLoading}
                className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-xl text-amber-200 hover:from-amber-500/30 hover:to-orange-500/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50 disabled:opacity-50 transition-all duration-300 group"
              >
                <Wallet className="w-5 h-5 mr-2 group-hover:text-amber-400 transition-colors" />
                {connectedWallet ? connectedWallet : "Wallet"}
              </button>
            </div>

            <div className="text-center">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={onNavigateToRegister}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
