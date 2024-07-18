import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Main from "../layout/Main";
import Sidebar from "../layout/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <Main />

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
