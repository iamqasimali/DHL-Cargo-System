import { useState } from "react";

import "./App.css";
import Dashboard from "./components/pages/Dashboard";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Dashboard/>
  );
}

export default App;


/*import React from 'react';
import Dashboard from '../DashboardCards';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Dashboard />
    </div>
  );
};

export default App;


*/