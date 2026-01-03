const About = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-96 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-white">About This Project</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-indigo-700 p-2 rounded-lg transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-6 space-y-6">
          {/* Project Name */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0h12v2H4V6zm6 5a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
              Auth Hub - Authentication System
            </h3>
            <p className="text-gray-600">A modern, full-stack authentication application built with React and Node.js</p>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Description
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Auth Hub is a comprehensive authentication application that provides user registration, login, and profile management features. It demonstrates best practices in secure authentication, JWT token handling, and protected routes with a professional user interface.
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Key Features
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                User Registration with validation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                Secure Login with JWT authentication
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                Protected Routes and user profiles
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                Responsive & professional UI design
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 000-2H7zM4 7a1 1 0 011-1h10a1 1 0 011 1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
              </svg>
              Technologies Used
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {/* Frontend */}
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-2">Frontend</p>
                <div className="space-y-1">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2 mb-1">React 19</span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2 mb-1">Vite</span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2 mb-1">Tailwind CSS</span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2 mb-1">React Router</span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2 mb-1">Axios</span>
                </div>
              </div>
              {/* Backend */}
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-2">Backend</p>
                <div className="space-y-1">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2 mb-1">Node.js</span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2 mb-1">Express</span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2 mb-1">MongoDB</span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2 mb-1">JWT</span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2 mb-1">bcryptjs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Developer Info */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200">
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Built with ❤️</span> as a modern authentication example showcasing best practices in full-stack development.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 border-t flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
