import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  HeaderLogo,
  HeaderStyled,
  MainHeader,
  PageTitle,
  UserInfo,
  UserPhoto,
  UserName,
} from './Header.styled';

const Header = () => {
  const location = useLocation();

  const getPageTitle = (path) => {
    switch (path) {
      case '/settings':
        return 'Налаштування';
      case '/passed':
        return 'Погоджено';
      case '/failed':
        return 'Відмовлено';
      case '/add':
        return 'Додавання кандидата';
      default:
        return 'Головна';
    }
  };

  return (
    <HeaderStyled>
      <HeaderLogo>Feeda</HeaderLogo>
      <MainHeader>
        <PageTitle>
          {getPageTitle(location.pathname)}
        </PageTitle>
        <UserInfo>
          <UserPhoto src="../../../../public/userPhoto.svg"></UserPhoto>
          <UserName>User.name</UserName>
        </UserInfo>
      </MainHeader>
    </HeaderStyled>
  );
};

export default Header;
