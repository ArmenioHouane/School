import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Navbar: React.FC = () => {
  return (
    <header className="dark:bg-gray-800 dark:text-white flex items-center justify-between p-4 shadow-md">
      <div className="text-xl font-bold">Admin Dashboard</div>
      <nav className="flex items-center space-x-4">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">Profile</a>
        <a href="#" className="hover:text-gray-300">Settings</a>
        <button className="text-gray-400 hover:text-gray-300">
          <FiSearch size={20} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
