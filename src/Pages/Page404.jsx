import React from "react";
import { Link } from "react-router";

const Page404 = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
        <p className="text-2xl md:text-3xl mt-6">Oops! Page Not Found</p>
        <p className="mt-2 text-gray-400">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/home"
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Go Back Home
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Page404;
