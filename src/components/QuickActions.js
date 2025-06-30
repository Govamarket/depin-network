import React from "react";
import { Power, RefreshCcw, BarChart3 } from "lucide-react";

const QuickActions = () => (
  <div className="mt-12 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
    <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <button className="flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl">
        <Power className="w-5 h-5" />
        <span className="font-medium">Start All</span>
      </button>
      <button className="flex items-center space-x-3 bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl">
        <Power className="w-5 h-5" />
        <span className="font-medium">Stop All</span>
      </button>
      <button className="flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl">
        <RefreshCcw className="w-5 h-5" />
        <span className="font-medium">Sync All</span>
      </button>
      <button className="flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl">
        <BarChart3 className="w-5 h-5" />
        <span className="font-medium">View Report</span>
      </button>
    </div>
  </div>
);

export default QuickActions;
