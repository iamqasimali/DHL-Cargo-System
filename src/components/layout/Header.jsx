import React from 'react';
import { SearchIcon, BellIcon, ChevronDownIcon } from '@heroicons/react/outline';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="relative">
        <input type="text" className="border rounded-md p-2" placeholder="Search..." />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <SearchIcon className="w-5 h-5 text-gray-500" />
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <BellIcon className="w-6 h-6 text-gray-500" />
          <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full"></span>
        </button>
        <div className="relative">
          <button className="flex items-center space-x-2">
            <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/150" alt="User" />
            <span className="hidden md:block">John Doe</span>
            <ChevronDownIcon className="w-4 h-4" />
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden">
            <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
            <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
            <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;