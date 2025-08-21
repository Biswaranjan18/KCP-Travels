import React, { useState } from "react";
import Dashbord from '../pages/Dashbord'
import { 
  FaTachometerAlt, 
  FaCar, 
  FaBox, 
  FaSignOutAlt, 
  FaPhone, 
  FaBars,
  FaTimes,
  FaChevronRight,
  FaChevronLeft,
  FaUserCog,
  FaChartLine,
  FaCog,
  FaBell
} from "react-icons/fa";
import Bookcar from "../components/Bookcar";
import CallbackAdminPanel from "../components/CallbackAdminPanel";
import Package from "../pages/Package";

const AdminPanel = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return <Dashbord/>
      case "bookcar":
      return <Bookcar/>
      case "packages":
       return <Package/>
      case "callback":
       return <CallbackAdminPanel/>
      default:
        return <Dashbord />;
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { id: "bookcar", label: "Book Car", icon: <FaCar /> },
    { id: "packages", label: "Packages", icon: <FaBox /> },
    { id: "callback", label: "Callback Requests", icon: <FaPhone /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile sidebar backdrop */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden animate-fadeIn"
          onClick={closeMobileSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:relative z-30 bg-gradient-to-b from-blue-900 to-blue-800 shadow-xl flex-shrink-0 flex flex-col
        transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'w-64' : 'w-20'}
        ${isMobileSidebarOpen ? 'left-0' : '-left-64'} 
        md:left-0 h-full
      `}>
        <div className="p-5 border-b border-blue-700 flex items-center justify-between">
          {isSidebarOpen && (
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mr-3">
                <span className="text-blue-800 font-bold">AC</span>
              </div>
              <h2 className="text-xl font-bold text-white">Admin Console</h2>
            </div>
          )}
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-blue-700 hidden md:block text-white"
          >
            {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
          <button 
            onClick={closeMobileSidebar}
            className="p-2 rounded-md hover:bg-blue-700 md:hidden text-white"
          >
            <FaTimes />
          </button>
        </div>
        
        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveMenu(item.id);
                closeMobileSidebar();
              }}
              className={`flex items-center w-full px-4 py-3 rounded-xl transition-all ${
                activeMenu === item.id 
                  ? "bg-blue-700 text-white shadow-inner" 
                  : "text-blue-100 hover:bg-blue-700 hover:text-white"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {isSidebarOpen && <span className="ml-3 font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>
        
        <div className="px-3 py-6 border-t border-blue-700">
          <button className="flex items-center w-full px-4 py-3 text-blue-200 hover:bg-blue-700 hover:text-white rounded-xl transition-all">
            <span className="text-lg"><FaSignOutAlt /></span>
            {isSidebarOpen && <span className="ml-3 font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-5 transition-all duration-300 flex flex-col h-full overflow-hidden">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => setIsMobileSidebarOpen(true)}
              className="p-2 rounded-lg bg-white shadow mr-3 md:hidden"
            >
              <FaBars className="text-blue-800" />
            </button>
            <h1 className="text-2xl font-bold text-gray-800 capitalize">
              {activeMenu === 'bookcar' ? 'Book Car' : 
              activeMenu === 'callback' ? 'Callback Requests' : 
              activeMenu}
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 rounded-lg bg-white shadow text-gray-500 hover:text-blue-600">
              <FaBell />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
            </button>
            <button className="p-2 rounded-lg bg-white shadow text-gray-500 hover:text-blue-600">
              <FaCog />
            </button>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <span className="text-blue-800 font-medium">AD</span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-800">Admin User</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto">
          {renderContent()}
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default AdminPanel;