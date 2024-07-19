import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import DashboardCards from "../../home/DashboardCards";
import SubscriberChart from '../../home/SubscriberChart';
import CustomerTable from "../../home/CustomerList";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64 overflow-y-auto">
        <Header />
        <div className="flex-1 p-4">
          <DashboardCards/>
          <SubscriberChart/>
          <CustomerTable/>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
