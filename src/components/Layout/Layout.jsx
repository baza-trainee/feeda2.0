import React, { Suspense } from 'react';
import Header from '../UI/Header/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from '../UI/Sidebar/Sidebar';
import { PageSection } from '../../pages/AddPage/AddPage.styled';

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <PageSection>
          <Sidebar />
          <Outlet />
        </PageSection>
      </div>
    </>
  );
};

export default Layout;
