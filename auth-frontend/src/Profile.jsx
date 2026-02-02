import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/auth/profile`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setData(res.data);
      } catch {
        localStorage.removeItem("token");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-16 h-16 animate-spin text-indigo-600 mx-auto" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-lg text-gray-600 mt-4">Loading your profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Background */}
          <div className="h-32 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
          
          {/* Profile Content */}
          {data && (
            <div className="px-8 pb-8">
              {/* Avatar Section */}
              <div className="text-center -mt-16 mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-lg border-4 border-white">
                  {data.name?.charAt(0).toUpperCase() || "U"}
                </div>
              </div>
              
              {/* User Info */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">{data.name}</h2>
                <p className="text-indigo-600 font-medium mt-2 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {data.email}
                </p>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                  <p className="text-gray-600 text-sm font-medium">User ID</p>
                  <p className="text-indigo-600 font-bold text-lg mt-1">{data._id?.substring(0, 8)}...</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                  <p className="text-gray-600 text-sm font-medium">Account Status</p>
                  <p className="text-purple-600 font-bold text-lg mt-1">Active</p>
                </div>
              </div>
              
              {/* Full Details */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 17v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" />
                  </svg>
                  Profile Details
                </h3>
                <pre className="text-sm text-gray-700 overflow-x-auto bg-white p-4 rounded border border-gray-300 font-mono">
                  {JSON.stringify(data, null, 2)}
                </pre>
              </div>
              
              {/* Footer Note */}
              <p className="text-center text-gray-500 text-sm mt-6">
                Welcome to your secure profile dashboard
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;