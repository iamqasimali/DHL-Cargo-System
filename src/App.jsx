import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./components/pages/Dashboard";
import Task from './components/pages/Task';
import Table from './components/pages/Table';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/task" element={<Task />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </Router>
  );
}

export default App;
