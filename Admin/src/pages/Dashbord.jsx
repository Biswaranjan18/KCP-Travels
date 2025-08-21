import React, { useState, useEffect } from "react";
import { 
  FaCar, 
  FaBox, 
  FaPhone, 
  FaUserCog,
  FaPlus,
  FaChartBar,
  FaUsers,
  FaBell,
  FaArrowUp,
  FaArrowDown,
  FaCog
} from "react-icons/fa";

const AdminDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Sample dashboard data
  const dashboardData = {
    stats: [
      { 
        title: "Total Bookings", 
        value: "248", 
        change: "+12%", 
        trend: "up",
        icon: <FaCar className="text-blue-500" />,
        color: "blue"
      },
      { 
        title: "Callback Requests", 
        value: "42", 
        change: "+5%", 
        trend: "up",
        icon: <FaPhone className="text-green-500" />,
        color: "green"
      },
      { 
        title: "Packages", 
        value: "16", 
        change: "+2%", 
        trend: "up",
        icon: <FaBox className="text-purple-500" />,
        color: "purple"
      },
      { 
        title: "Users", 
        value: "1,243", 
        change: "+8%", 
        trend: "up",
        icon: <FaUserCog className="text-red-500" />,
        color: "red"
      },
    ],
    recentActivity: [
      { id: 1, user: "John Doe", action: "Booked a car", time: "2 mins ago", type: "booking" },
      { id: 2, user: "Sarah Smith", action: "Requested a callback", time: "15 mins ago", type: "callback" },
      { id: 3, user: "Michael Brown", action: "Purchased a package", time: "32 mins ago", type: "package" },
      { id: 4, user: "Emma Wilson", action: "Cancelled a booking", time: "1 hour ago", type: "cancellation" },
    ]
  };

  const getActivityIcon = (type) => {
    switch(type) {
      case "booking": return <div className="p-2 rounded-full bg-blue-100"><FaCar className="text-blue-500 text-sm" /></div>;
      case "callback": return <div className="p-2 rounded-full bg-green-100"><FaPhone className="text-green-500 text-sm" /></div>;
      case "package": return <div className="p-2 rounded-full bg-purple-100"><FaBox className="text-purple-500 text-sm" /></div>;
      case "cancellation": return <div className="p-2 rounded-full bg-red-100"><FaCar className="text-red-500 text-sm" /></div>;
      default: return <div className="p-2 rounded-full bg-gray-100"><FaBell className="text-gray-500 text-sm" /></div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {/* <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">
              {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              <FaCog className="mr-2" />
              Settings
            </button>
          </div>
        </div> */}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {dashboardData.stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 transition-transform hover:translate-y-[-4px]">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</h3>
                  <div className="flex items-center mt-2">
                    <span className={`text-xs font-medium ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                      {stat.trend === "up" ? <FaArrowUp className="inline mr-1" /> : <FaArrowDown className="inline mr-1" />}
                      {stat.change}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">from last week</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}-50`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-gray-800 text-lg">Recent Activity</h3>
              <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
            </div>
            <div className="space-y-4">
              {dashboardData.recentActivity.map(item => (
                <div key={item.id} className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0">
                    {getActivityIcon(item.type)}
                  </div>
                  <div className="ml-4 flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {item.user} <span className="text-gray-500 font-normal">{item.action}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-gray-800 text-lg">Quick Actions</h3>
              <button className="text-sm text-blue-600 hover:text-blue-800">More</button>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <button className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl text-sm font-medium transition-colors group">
                <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <FaPlus className="text-blue-600" />
                </div>
                <span className="ml-3">Add New Car</span>
              </button>
              
              <button className="flex items-center p-4 bg-green-50 hover:bg-green-100 text-green-600 rounded-xl text-sm font-medium transition-colors group">
                <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-200 transition-colors">
                  <FaBox className="text-green-600" />
                </div>
                <span className="ml-3">Create Package</span>
              </button>
              
              <button className="flex items-center p-4 bg-purple-50 hover:bg-purple-100 text-purple-600 rounded-xl text-sm font-medium transition-colors group">
                <div className="bg-purple-100 p-2 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <FaChartBar className="text-purple-600" />
                </div>
                <span className="ml-3">View Reports</span>
              </button>
              
              <button className="flex items-center p-4 bg-yellow-50 hover:bg-yellow-100 text-yellow-600 rounded-xl text-sm font-medium transition-colors group">
                <div className="bg-yellow-100 p-2 rounded-lg group-hover:bg-yellow-200 transition-colors">
                  <FaUsers className="text-yellow-600" />
                </div>
                <span className="ml-3">Manage Users</span>
              </button>
            </div>
          </div>
        </div>

        {/* Additional Stats Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-5 shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-blue-100 text-sm">Active Bookings</p>
                <h3 className="text-2xl font-bold mt-1">48</h3>
              </div>
              <div className="bg-blue-400 bg-opacity-25 p-3 rounded-lg">
                <FaCar className="text-xl" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-5 shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-green-100 text-sm">Pending Callbacks</p>
                <h3 className="text-2xl font-bold mt-1">12</h3>
              </div>
              <div className="bg-green-400 bg-opacity-25 p-3 rounded-lg">
                <FaPhone className="text-xl" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-5 shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-purple-100 text-sm">New Users Today</p>
                <h3 className="text-2xl font-bold mt-1">24</h3>
              </div>
              <div className="bg-purple-400 bg-opacity-25 p-3 rounded-lg">
                <FaUserCog className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;