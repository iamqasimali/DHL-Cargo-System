import React from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import TableData from '../sidebar/TableData';

const Table = () => {
  return (
    <div>
        <div className="flex h-screen">
      <Sidebar/>
      <div className="flex-1 flex flex-col ml-64 overflow-y-auto">
      <Header/>
      <div>
        <TableData/>
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Table;
