import React, { useState, useEffect } from 'react';
import { FaPhone, FaTrash, FaCheck, FaTimes, FaSearch, FaFilter, FaSync } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const CallbackAdminPanel = () => {
  const [callbacks, setCallbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    completed: 0,
    failed: 0
  });

  // Fetch all callback requests
  const fetchCallbacks = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8580/api/callbacks');
      setCallbacks(response.data || []);
      
      // Calculate stats with safe property access
      const callbacksData = response.data || [];
      const statsData = {
        total: callbacksData.length,
        pending: callbacksData.filter(c => (c.status || 'pending') === 'pending').length,
        completed: callbacksData.filter(c => (c.status || 'pending') === 'completed').length,
        failed: callbacksData.filter(c => (c.status || 'pending') === 'failed').length
      };
      setStats(statsData);
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching callbacks:', error);
      toast.error('Failed to fetch callback requests');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCallbacks();
  }, []);

  // Delete a callback request
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this request?')) {
      try {
        await axios.delete(`http://localhost:8580/api/callbacks/${id}`);
        toast.success('Callback request deleted successfully');
        fetchCallbacks();
      } catch (error) {
        console.error('Error deleting callback:', error);
        toast.error('Failed to delete callback request');
      }
    }
  };

  // Update callback status
  const updateStatus = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:8580/api/callbacks/${id}/status`, {
        status: newStatus
      });
      toast.success(`Status updated to ${newStatus}`);
      fetchCallbacks();
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  // Filter callbacks based on search and status
  const filteredCallbacks = callbacks.filter(callback => {
    // Safe property access with fallbacks
    const phone = callback.phone || '';
    const status = callback.status || 'pending';
    
    const matchesSearch = phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    
    try {
      const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      return new Date(dateString).toLocaleDateString(undefined, options);
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid Date';
    }
  };

  // Safe status display with fallback
  const getStatusDisplay = (status) => {
    const statusValue = status || 'pending';
    return statusValue.charAt(0).toUpperCase() + statusValue.slice(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {/* <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Callback Requests</h1>
          <p className="text-gray-600 mt-1">Manage and track all customer callback requests</p>
        </div> */}
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="rounded-lg bg-blue-100 p-3">
                <FaPhone className="w-5 h-5 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-600">Total Requests</h3>
                <p className="text-xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="rounded-lg bg-yellow-100 p-3">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-600">Pending</h3>
                <p className="text-xl font-bold text-gray-900">{stats.pending}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hidden md:block">
            <div className="flex items-center">
              <div className="rounded-lg bg-green-100 p-3">
                <FaCheck className="w-5 h-5 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-600">Completed</h3>
                <p className="text-xl font-bold text-gray-900">{stats.completed}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hidden md:block">
            <div className="flex items-center">
              <div className="rounded-lg bg-red-100 p-3">
                <FaTimes className="w-5 h-5 text-red-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-600">Failed</h3>
                <p className="text-xl font-bold text-gray-900">{stats.failed}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center">
              <FaFilter className="mr-2 text-gray-500" />
              Filters
            </h2>
            <button 
              onClick={fetchCallbacks}
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
              title="Refresh data"
            >
              <FaSync className="mr-1" />
              Refresh
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search by Phone</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter phone number..."
                  className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status Filter</label>
              <div className="relative">
                <select
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="failed">Failed</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Callback Requests Table */}
        {loading ? (
          <div className="flex justify-center items-center h-64 bg-white rounded-xl shadow-sm">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto"></div>
              <p className="mt-3 text-gray-600">Loading callback requests...</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requested At</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCallbacks.length > 0 ? (
                    filteredCallbacks.map((callback) => {
                      // Safe property access with fallbacks
                      const phone = callback.phone || 'N/A';
                      const status = callback.status || 'pending';
                      const createdAt = callback.createdAt;
                      const name = callback.name;
                      
                      return (
                        <tr key={callback._id} className="hover:bg-gray-50 transition-colors duration-150">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="bg-blue-100 p-2 rounded-lg">
                                <FaPhone className="text-blue-600" />
                              </div>
                              <div className="ml-3">
                                <div className="font-medium text-gray-900">+91 {phone}</div>
                                {name && (
                                  <div className="text-sm text-gray-500">{name}</div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{formatDate(createdAt)}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${status === 'completed' ? 'bg-green-100 text-green-800' : 
                                status === 'failed' ? 'bg-red-100 text-red-800' : 
                                'bg-yellow-100 text-yellow-800'}`}>
                              {getStatusDisplay(status)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              {status !== 'completed' && (
                                <button
                                  onClick={() => updateStatus(callback._id, 'completed')}
                                  className="bg-green-100 text-green-800 p-2 rounded-lg hover:bg-green-200 transition-colors"
                                  title="Mark as completed"
                                >
                                  <FaCheck />
                                </button>
                              )}
                              {status !== 'failed' && (
                                <button
                                  onClick={() => updateStatus(callback._id, 'failed')}
                                  className="bg-red-100 text-red-800 p-2 rounded-lg hover:bg-red-200 transition-colors"
                                  title="Mark as failed"
                                >
                                  <FaTimes />
                                </button>
                              )}
                              <button
                                onClick={() => handleDelete(callback._id)}
                                className="bg-gray-100 text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition-colors"
                                title="Delete request"
                              >
                                <FaTrash />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-6 py-8 text-center">
                        <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No callback requests found</h3>
                        <p className="mt-1 text-sm text-gray-500">Try changing your filters or search term</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallbackAdminPanel;