import React from 'react';

const cards = [
  {
    name: 'Net Revenue',
    amount: '$73,000',
    trend: 'up',
    lastWeek: '+ $12,000',
    lastMonth: '+ 12%',
    color: 'text-blue-500',
  },
  {
    name: 'Sales',
    amount: '$62,000',
    trend: 'down',
    lastWeek: '- $3,000',
    lastMonth: '- 7%',
    color: 'text-red-500',
  },
  {
    name: 'Total Visitor',
    amount: '7,623',
    trend: 'up',
    lastWeek: '+ 1278',
    lastMonth: '+ 3%',
    color: 'text-green-500',
  },
];

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {cards.map((card) => (
        <div key={card.name} className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className={`flex-shrink-0 ${card.color}`}>
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a4 4 0 01 4-4h10a4 4 0 014 4v16a4 4 0 01-4 4H7a4 4 0 01-4-4V4z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">{card.name}</p>
              <p className="text-2xl font-semibold text-gray-900">{card.amount}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <div className={`flex items-center ${card.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                <p className="ml-1 text-sm font-medium">{card.lastWeek}</p>
              </div>
              <p className="ml-2 text-sm text-gray-500">Last week</p>
            </div>
            <div className="flex items-center mt-1">
              <div className={`flex items-center ${card.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                <p className="ml-1 text-sm font-medium">{card.lastMonth}</p>
              </div>
              <p className="ml-2 text-sm text-gray-500">Last month</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
