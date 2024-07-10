import React from 'react';
import { Disclosure } from '@headlessui/react';
import { HomeIcon, CalendarIcon, UserIcon, UsersIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Bookings', href: '#', icon: CalendarIcon, current: false },
  { name: 'Affiliates', href: '#', icon: UserIcon, current: false },
  { name: 'Customers', href: '#', icon: UsersIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Sidebar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="flex flex-col w-64 h-full">
            <div className="flex items-center h-16 px-4 bg-gray-900">
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="flex-1 mt-5 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
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
                  </a>
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
