import React, { useState, useEffect } from "react";
import Header from "./Header";
import {
  Power,
  Plus,
  Wallet,
  Settings,
  TrendingUp,
  Activity,
  Globe,
  Zap,
  DollarSign,
  RefreshCcw,
  Bell,
  ChevronRight,
  Wifi,
  WifiOff,
  BarChart3,
  Shield,
  Gamepad2,
  Navigation,
  Thermometer,
  Radio,
  Car,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
} from "lucide-react";

const DePINDashboard = () => {
  const [showAddProject, setShowAddProject] = useState(false);
  const [availableProjects] = useState([
    {
      name: "Grass",
      type: "Bandwidth Sharing",
      method: "chrome_extension",
      description: "Share unused internet bandwidth",
      icon: Globe,
      setupInstructions: "Install Chrome extension and login",
      controlType: "manual",
      apiAvailable: false,
    },
    {
      name: "Nodepay",
      type: "Network Sharing",
      method: "chrome_extension",
      description: "Passive income through network sharing",
      icon: Wifi,
      setupInstructions: "Install extension, verify email, run in background",
      controlType: "manual",
      apiAvailable: false,
    },
    {
      name: "Flux",
      type: "Cloud Computing",
      method: "desktop_app",
      description: "Decentralized cloud infrastructure",
      icon: Zap,
      setupInstructions: "Download FluxNode, configure, stake FLUX",
      controlType: "api",
      apiAvailable: true,
    },
    {
      name: "Theta Edge Node",
      type: "Video Streaming",
      method: "desktop_app",
      description: "Share bandwidth for video delivery",
      icon: Activity,
      setupInstructions: "Install Edge Node, set sharing preferences",
      controlType: "manual",
      apiAvailable: false,
    },
  ]);

  const [projects, setProjects] = useState([
    {
      id: "helium",
      name: "Helium",
      type: "IoT Network",
      icon: Radio,
      status: "active",
      earnings: { amount: 3.2, token: "HNT", usd: 12.48 },
      performance: 95,
      lastSync: "2 mins ago",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      id: "hivemapper",
      name: "Hivemapper",
      type: "Mapping Network",
      icon: MapPin,
      status: "inactive",
      earnings: { amount: 2.4, token: "HONEY", usd: 8.64 },
      performance: 78,
      lastSync: "1 hour ago",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      id: "weatherxm",
      name: "WeatherXM",
      type: "Weather Data",
      icon: Thermometer,
      status: "active",
      earnings: { amount: 1.8, token: "WXM", usd: 5.76 },
      performance: 88,
      lastSync: "5 mins ago",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      id: "dimo",
      name: "DIMO",
      type: "Vehicle Data",
      icon: Car,
      status: "error",
      earnings: { amount: 0.9, token: "DIMO", usd: 2.16 },
      performance: 42,
      lastSync: "3 hours ago",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      id: "render",
      name: "Render Network",
      type: "GPU Compute",
      icon: Zap,
      status: "active",
      earnings: { amount: 5.7, token: "RNDR", usd: 22.8 },
      performance: 92,
      lastSync: "1 min ago",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      id: "akash",
      name: "Akash Network",
      type: "Cloud Compute",
      icon: Globe,
      status: "inactive",
      earnings: { amount: 12.5, token: "AKT", usd: 45.0 },
      performance: 85,
      lastSync: "30 mins ago",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
  ]);

  const [totalEarnings, setTotalEarnings] = useState(0);
  const [connectedWallet, setConnectedWallet] = useState("0x1234...5678");
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const total = projects.reduce(
      (sum, project) => sum + project.earnings.usd,
      0
    );
    setTotalEarnings(total);
  }, [projects]);

  const toggleProject = (projectId) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              status: project.status === "active" ? "inactive" : "active",
            }
          : project
      )
    );
  };

  const refreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "inactive":
        return <XCircle className="w-4 h-4 text-gray-400" />;
      case "error":
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <XCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "text-green-600 bg-green-100";
      case "inactive":
        return "text-gray-600 bg-gray-100";
      case "error":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="fixed w-full z-50 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Use the Header component */}
        <Header
          connectedWallet={connectedWallet}
          isRefreshing={isRefreshing}
          refreshData={refreshData}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Earnings (24h)
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  ${totalEarnings.toFixed(2)}
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
              <span className="text-sm text-green-600 font-medium">+12.5%</span>
              <span className="text-sm text-gray-500 ml-2">vs yesterday</span>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Active Projects
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {projects.filter((p) => p.status === "active").length}
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm text-gray-500">
                of {projects.length} total projects
              </span>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Avg Performance
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {Math.round(
                    projects.reduce((sum, p) => sum + p.performance, 0) /
                      projects.length
                  )}
                  %
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <Activity className="w-4 h-4 text-purple-500 mr-2" />
              <span className="text-sm text-purple-600 font-medium">
                Optimal
              </span>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Network Status
                </p>
                <p className="text-3xl font-bold text-green-600">Online</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Wifi className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-gray-500">
                All systems operational
              </span>
            </div>
          </div>
        </div>

        {/* Add Project Modal Trigger */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Your DePIN Projects
          </h2>
          <button
            onClick={() => setShowAddProject(true)}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Plus className="w-4 h-4" />
            <span>Add Project</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
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
                      <h3 className="text-lg font-bold text-gray-900">
                        {project.name}
                      </h3>
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
                      <p className="text-sm text-gray-500">
                        ${project.earnings.usd}
                      </p>
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
                      project.status === "active"
                        ? "bg-blue-600"
                        : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                        project.status === "active"
                          ? "translate-x-6"
                          : "translate-x-1"
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
          })}
        </div>

        {/* Add Project Modal */}
        {showAddProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Add DePIN Project
                </h3>
                <button
                  onClick={() => setShowAddProject(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <XCircle className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availableProjects.map((project, index) => {
                  const IconComponent = project.icon;
                  return (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-all"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">
                            {project.name}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">
                            {project.description}
                          </p>

                          {/* Method Badge */}
                          <div className="flex items-center space-x-2 mb-3">
                            <span
                              className={`text-xs px-2 py-1 rounded-full font-medium ${
                                project.method === "chrome_extension"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : project.method === "desktop_app"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-green-100 text-green-800"
                              }`}
                            >
                              {project.method.replace("_", " ").toUpperCase()}
                            </span>
                            <span
                              className={`text-xs px-2 py-1 rounded-full font-medium ${
                                project.apiAvailable
                                  ? "bg-green-100 text-green-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {project.apiAvailable
                                ? "API Available"
                                : "Manual Control"}
                            </span>
                          </div>

                          {/* Setup Instructions */}
                          <div className="bg-gray-50 rounded-lg p-3 mb-3">
                            <p className="text-xs text-gray-600 font-medium mb-1">
                              Setup Instructions:
                            </p>
                            <p className="text-xs text-gray-700">
                              {project.setupInstructions}
                            </p>
                          </div>

                          {/* Control Method Explanation */}
                          <div className="mb-4">
                            {project.method === "chrome_extension" && (
                              <div className="flex items-start space-x-2 text-xs text-amber-700 bg-amber-50 p-2 rounded-lg">
                                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <div>
                                  <p className="font-medium">
                                    Chrome Extension Project
                                  </p>
                                  <p>
                                    This runs in your browser. Dashboard will
                                    track manually entered earnings and provide
                                    quick links to extension.
                                  </p>
                                </div>
                              </div>
                            )}
                            {project.method === "desktop_app" &&
                              !project.apiAvailable && (
                                <div className="flex items-start space-x-2 text-xs text-blue-700 bg-blue-50 p-2 rounded-lg">
                                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">
                                      Desktop Application
                                    </p>
                                    <p>
                                      Runs on your computer. Dashboard will
                                      provide shortcuts and manual earnings
                                      tracking.
                                    </p>
                                  </div>
                                </div>
                              )}
                            {project.apiAvailable && (
                              <div className="flex items-start space-x-2 text-xs text-green-700 bg-green-50 p-2 rounded-lg">
                                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <div>
                                  <p className="font-medium">
                                    API Integration Available
                                  </p>
                                  <p>
                                    Dashboard can automatically control and
                                    monitor this project.
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>

                          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                            Add Project
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Custom Project Option */}
              <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Custom Project
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Add a project not listed above
                  </p>
                  <button className="bg-gray-600 text-white text-sm py-2 px-4 rounded-lg hover:bg-gray-700 transition-all">
                    Add Custom Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-12 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Quick Actions
          </h3>
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
      </div>
    </div>
  );
};

export default DePINDashboard;
