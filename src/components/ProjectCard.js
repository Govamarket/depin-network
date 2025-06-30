import React from "react";
import { Clock } from "lucide-react";

const ProjectCard = ({
  project,
  toggleProject,
  getStatusIcon,
  getStatusColor,
}) => {
  const IconComponent = project.icon;
  return (
    <div
      className={`${project.bgColor} backdrop-blur-sm rounded-2xl p-6 border ${project.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
    >
      {/* Project Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div
            className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center shadow-lg`}
          >
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
            <p className="text-sm text-gray-600">{project.type}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {getStatusIcon(project.status)}
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium capitalize ${getStatusColor(
              project.status
            )}`}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Earnings */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">24h Earnings</span>
          <div className="text-right">
            <p className="text-lg font-bold text-gray-900">
              {project.earnings.amount} {project.earnings.token}
            </p>
            <p className="text-sm text-gray-500">${project.earnings.usd}</p>
          </div>
        </div>
      </div>

      {/* Performance Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Performance</span>
          <span className="text-sm font-medium text-gray-900">
            {project.performance}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`bg-gradient-to-r ${project.color} h-2 rounded-full transition-all duration-500`}
            style={{ width: `${project.performance}%` }}
          ></div>
        </div>
      </div>

      {/* Last Sync */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>Last sync: {project.lastSync}</span>
        </div>
      </div>

      {/* Toggle Switch */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <span className="text-sm font-medium text-gray-700">
          {project.status === "active" ? "Deactivate" : "Activate"}
        </span>
        <button
          onClick={() => toggleProject(project.id)}
          className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            project.status === "active" ? "bg-blue-600" : "bg-gray-300"
          }`}
        >
          <span
            className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
              project.status === "active" ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 mt-4">
        <button className="flex-1 bg-white/80 hover:bg-white text-gray-700 text-sm py-2 px-3 rounded-lg transition-all duration-200 border border-gray-200 hover:border-gray-300">
          Settings
        </button>
        <button className="flex-1 bg-white/80 hover:bg-white text-gray-700 text-sm py-2 px-3 rounded-lg transition-all duration-200 border border-gray-200 hover:border-gray-300">
          View Stats
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
