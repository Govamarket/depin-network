import React, { useState } from "react";
import { Activity, Menu, X, Wallet, Settings, RefreshCcw } from "lucide-react";

const Header = ({ connectedWallet, isRefreshing, refreshData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Main Header Content */}
        <div className="flex items-center justify-between">
          {/* Logo and Branding */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                DePIN Control Center
              </h1>
              <p className="text-xs sm:text-sm text-gray-500">
                Decentralized Infrastructure Management
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={refreshData}
              className="p-2 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-200 border border-white/30"
            >
              <RefreshCcw
                className={`w-5 h-5 text-gray-600 ${
                  isRefreshing ? "animate-spin" : ""
                }`}
              />
            </button>
            <div className="flex items-center space-x-2 bg-white/50 px-4 py-2 rounded-lg border border-white/30">
              <Wallet className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700 truncate max-w-[120px]">
                {connectedWallet}
              </span>
            </div>
            <button className="p-2 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-200 border border-white/30">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Mobile Navigation - Toggle Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={refreshData}
              className="p-2 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-200 border border-white/30"
            >
              <RefreshCcw
                className={`w-5 h-5 text-gray-600 ${
                  isRefreshing ? "animate-spin" : ""
                }`}
              />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-200 border border-white/30"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } mt-4 pb-4 border-t border-white/20 pt-4`}
        >
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2 bg-white/50 px-4 py-3 rounded-lg border border-white/30">
              <Wallet className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700 truncate">
                {connectedWallet}
              </span>
            </div>
            <button className="flex items-center space-x-2 text-left px-4 py-2 text-gray-700 hover:bg-white/50 rounded-lg">
              <Settings className="w-5 h-5 text-gray-600" />
              <span>Settings</span>
            </button>
            <button className="text-left px-4 py-2 text-gray-700 hover:bg-white/50 rounded-lg">
              Dashboard
            </button>
            <button className="text-left px-4 py-2 text-gray-700 hover:bg-white/50 rounded-lg">
              Analytics
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
