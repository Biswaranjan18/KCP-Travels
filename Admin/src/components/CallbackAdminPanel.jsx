// src/components/admin/CallbackAdminPanel.js
import React, { useState, useEffect } from 'react';
import { FaPhone, FaTrash, FaCheck, FaTimes, FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const CallbackAdminPanel = () => {
  const [callbacks, setCallbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Fetch all callback requests
  const fetchCallbacks = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8580/api/callbacks');
      setCallbacks(response.data);
      setLoading(false);
    } catch (error) {
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
        toast.success('Callback request deleted');
        fetchCallbacks();
      } catch (error) {
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
      toast.success('Status updated');
      fetchCallbacks();
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  // Filter callbacks based on search and status
  const filteredCallbacks = callbacks.filter(callback => {
    const matchesSearch = callback.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || callback.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Callback Requests</h1>
      
      {/* Filters */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by phone number..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <select
          className="border rounded-lg px-4 py-2"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="failed">Failed</option>
        </select>
      </div>

      {/* Callback Requests Table */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requested At</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCallbacks.length > 0 ? (
                filteredCallbacks.map((callback) => (
                  <tr key={callback._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FaPhone className="text-green-500 mr-2" />
                        <span className="font-medium">+91 {callback.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(callback.createdAt).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${callback.status === 'completed' ? 'bg-green-100 text-green-800' : 
                          callback.status === 'failed' ? 'bg-red-100 text-red-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                        {callback.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        {callback.status !== 'completed' && (
                          <button
                            onClick={() => updateStatus(callback._id, 'completed')}
                            className="text-green-600 hover:text-green-900"
                            title="Mark as completed"
                          >
                            <FaCheck />
                          </button>
                        )}
                        {callback.status !== 'failed' && (
                          <button
                            onClick={() => updateStatus(callback._id, 'failed')}
                            className="text-red-600 hover:text-red-900"
                            title="Mark as failed"
                          >
                            <FaTimes />
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(callback._id)}
                          className="text-gray-600 hover:text-gray-900"
                          title="Delete"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                    No callback requests found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Total Requests</h3>
          <p className="text-2xl font-bold">{callbacks.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Pending</h3>
          <p className="text-2xl font-bold text-yellow-600">
            {callbacks.filter(c => c.status === 'pending').length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Completed</h3>
          <p className="text-2xl font-bold text-green-600">
            {callbacks.filter(c => c.status === 'completed').length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallbackAdminPanel;