import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SubscriberChart = () => {
  const data = {
    labels: ['Apr 9', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15', 'Apr 16', 'Apr 17', 'Apr 18', 'Apr 19', 'Apr 20', 'Apr 21', 'Apr 22'],
    datasets: [
      {
        label: 'Gained',
        data: [65, 59, 80, 81, 56, 55, 40, 50, 70, 90, 100, 80, 60, 70],
        fill: true,
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(99, 102, 241, 1)',
        tension: 0.4,
      },
      {
        label: 'Lost',
        data: [45, 39, 60, 51, 76, 65, 30, 40, 50, 70, 90, 60, 40, 50],
        fill: true,
        backgroundColor: 'rgba(34, 211, 238, 0.2)',
        borderColor: 'rgba(34, 211, 238, 1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Subscribers</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default SubscriberChart;
