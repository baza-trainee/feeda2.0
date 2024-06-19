import React, { Suspense } from 'react';
import Header from '../UI/Header/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from '../UI/Sidebar/Sidebar';

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <Sidebar />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
