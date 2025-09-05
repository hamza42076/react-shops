import React from "react";
import { Link } from "react-router";

const ProjectDropdown = () => {
  return (
    <div className="relative group inline-block">
      {/* Dropdown Trigger */}
      <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white flex items-center">
        Projects
        <i className="ri-arrow-down-s-line ml-1"></i> {/* Remix Icon */}
      </button>

      {/* Dropdown Menu */}
      <ul className="absolute left-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300">
        <li>
          <Link
            to="/calculator"
            className="block px-4 py-2 hover:bg-gray-700 text-white"
          >
            Calculator
          </Link>
        </li>
        <li>
           <li>
          <Link
            to="/calculator"
            className="block px-4 py-2 hover:bg-gray-700  text-white"
          >
            ATM Machine
          </Link>
        </li>
        <li></li>
          <Link
            to="/todolist"
            className="block px-4 py-2 hover:bg-gray-700  text-white"
          >
            Todo List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProjectDropdown;
