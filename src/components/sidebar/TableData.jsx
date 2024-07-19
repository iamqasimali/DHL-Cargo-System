import React from 'react';

const TableData = () => {
  const data = [
    { name: 'Musharof Chowdhury', title: 'Multidisciplinary Web Entrepreneur', email: 'musharof@example.com', role: 'Owner' },
    { name: 'Naimur Rahman', title: 'Website Front-end Developer', email: 'naimurrahman@example.com', role: 'Member' },
    { name: 'Shafiq Hammad', title: 'Regional Paradigm Technician', email: 'shafiq.hd@example.com', role: 'Moderator' },
    { name: 'Alex Semuyel', title: 'Applications Engineer', email: 'alex.semuyel@example.com', role: 'Admin' },
    { name: 'Sulium Keliym', title: 'Lead Implementation Liaison', email: 'suliyim.info@example.com', role: 'Member' },
    { name: 'Jhon Smith', title: 'Regional Paradigm Technician', email: 'jhon.smith@example.com', role: 'Admin' },
    { name: 'Jenifer Lofess', title: 'Multidisciplinary Web Entrepreneur', email: 'loffes.cooper@example.com', role: 'Member' },
    { name: 'Devid Deekook', title: 'Central Security Manager', email: 'devid.decok@example.com', role: 'Moderator' },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Table</h1>
        <div className="text-sm text-gray-500">
          Dashboard / <span className="text-blue-500">Table</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((person) => (
              <tr key={person.email}>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  {person.name}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  {person.title}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  {person.email}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  {person.role}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-right">
                  <button className="text-blue-500 hover:text-blue-700">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
