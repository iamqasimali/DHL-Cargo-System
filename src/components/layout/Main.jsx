import React from 'react';
import DashboardCards from '../pages/DashboardCards';
import SubscriberChart from './SubscriberChart';
import CustomerTable from '../Customers/CustomerTable';

const Main = () => {
  return (
    <main className="flex-1 bg-gray-100 p-6">
      <div className="mb-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
         <DashboardCards />    
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <SubscriberChart />
        <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Customer List</h2>
        <CustomerTable />
      </div>
      </div>
      
     
  

    </main>
  );
};

export default Main;
