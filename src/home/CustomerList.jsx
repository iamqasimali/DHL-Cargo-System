import React from 'react';

const customers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '234-567-8901', status: 'Inactive' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '345-678-9012', status: 'Active' },
];

const CustomerList = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Customer List</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
