import React from "react";
import { TrendingUp, Activity } from "lucide-react";

const StatsCard = ({ title, value, icon: Icon, gradient, subtext, trend }) => (
  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
      <div
        className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
    <div className="mt-4 flex items-center">
      {trend ? (
        <>
          <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
          <span className="text-sm text-green-600 font-medium">{trend}</span>
        </>
      ) : (
        <Activity className="w-4 h-4 text-purple-500 mr-2" />
      )}
      <span className="text-sm text-gray-500">{subtext}</span>
    </div>
  </div>
);

export default StatsCard;
