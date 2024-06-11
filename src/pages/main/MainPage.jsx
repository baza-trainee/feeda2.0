import React from 'react';
import { Main } from './Main.styled';
import Sidebar from '../../components/UI/Sidebar/Sidebar';

const MainPage = () => {
  return (
    <>
      <Main>
        <Sidebar></Sidebar>
      </Main>
    </>
  );
};

export default MainPage;
