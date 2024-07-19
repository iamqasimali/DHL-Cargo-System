import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { HomeIcon, CalendarIcon, UsersIcon } from '@heroicons/react/outline';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Task', href: '/task', icon: CalendarIcon },
  { name: 'Table', href: '/table', icon: UsersIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Sidebar = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed inset-y-0 left-0 w-64">
      {({ open }) => (
        <>
          <div className="flex flex-col h-full">
            <div className="flex items-center h-16 px-4 bg-gray-900">
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <span className="ml-4 text-white font-bold">DHL Cargo System</span>
            </div>
            <div className="flex-1 mt-5 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setCurrent(item.href)}
                    className={classNames(
                      current === item.href
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Sidebar;
