import React from "react";
import { Activity, Wallet, Settings, RefreshCcw } from "lucide-react";

const Header = ({ connectedWallet, isRefreshing, refreshData }) => (
  <header className="bg-white/80 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                DePIN Control Center
              </h1>
              <p className="text-sm text-gray-500">
                Decentralized Infrastructure Management
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
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
            <span className="text-sm font-medium text-gray-700">
              {connectedWallet}
            </span>
          </div>
          <button className="p-2 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-200 border border-white/30">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
