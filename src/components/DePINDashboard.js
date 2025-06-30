import React, { useState, useEffect } from "react";
import Header from "./Header";
import StatsCard from "./StatsCard";
import ProjectCard from "./ProjectCard";
import QuickActions from "./QuickActions";
import {
  Plus,
  DollarSign,
  CheckCircle,
  Wifi,
  BarChart3,
  Radio,
  MapPin,
  Thermometer,
  Car,
  Zap,
  Globe,
  XCircle,
  AlertCircle,
} from "lucide-react";
// Icons from lucide-react

const DePINDashboard = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header
        connectedWallet={connectedWallet}
        isRefreshing={isRefreshing}
        refreshData={refreshData}
      />
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Earnings (24h)"
            value={`$${totalEarnings.toFixed(2)}`}
            icon={DollarSign}
            gradient="from-green-500 to-emerald-500"
            subtext="vs yesterday"
            trend="+12.5%"
          />
          <StatsCard
            title="Active Projects"
            value={projects.filter((p) => p.status === "active").length}
            icon={CheckCircle}
            gradient="from-blue-500 to-cyan-500"
            subtext={`of ${projects.length} total projects`}
          />
          <StatsCard
            title="Avg Performance"
            value={`${Math.round(
              projects.reduce((sum, p) => sum + p.performance, 0) /
                projects.length
            )}%`}
            icon={BarChart3}
            gradient="from-purple-500 to-pink-500"
            subtext="Optimal"
          />
          <StatsCard
            title="Network Status"
            value="Online"
            icon={Wifi}
            gradient="from-green-500 to-emerald-500"
            subtext="All systems operational"
          />
        </div>

        {/* Projects Grid */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Your DePIN Projects
          </h2>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            <Plus className="w-4 h-4" />
            <span>Add Project</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              toggleProject={toggleProject}
              getStatusIcon={getStatusIcon}
              getStatusColor={getStatusColor}
            />
          ))}
        </div>

        <QuickActions />
      </div>
    </div>
  );
};

export default DePINDashboard;
