import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import About from "./About";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [showAbout, setShowAbout] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white">Auth Hub</h1>
            </Link>
            
            <div className="flex items-center space-x-4 md:space-x-6">
              <button
                onClick={() => setShowAbout(true)}
                className="text-white hover:bg-indigo-700 px-4 py-2 rounded-lg font-medium transition duration-200 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About
              </button>

              {!token ? (
                <>
                  <Link 
                    to="/login" 
                    className="text-white hover:bg-indigo-700 px-4 py-2 rounded-lg font-medium transition duration-200"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="bg-white text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg font-medium transition duration-200"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <Link 
                    to="/profile" 
                    className="text-white hover:bg-indigo-700 px-4 py-2 rounded-lg font-medium transition duration-200 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    Profile
                  </Link>
                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition duration-200 flex items-center gap-2 shadow-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      
      <About isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </>
  );
};

export default Navbar;