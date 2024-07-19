import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 0 32px 0 32px;
  display: flex;
  flex-direction: row;
`;

export const HeaderLogo = styled.h1`
  min-width: 286px;
  margin-right: 24px;
  border-radius: 0px 0px 4px 4px;
  background: var(--yellow);
  padding: 16px 24px;
  color: var(--black);
  font-family: 'Exo 2';
  font-size: var(--title-main-medium-fs);
  font-weight: var(--title-main-medium-fw);
  line-height: var(--title-main-medium-lh);
  letter-spacing: 0%;
`;

export const MainHeader = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const PageTitle = styled.h2`
  font-weight: var(--title-medium-fw);
  font-size: var(--headline-large-fs);
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.figure`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;

export const UserName = styled.figcaption`
  font-weight: var(--title-large-fw);
  font-size: var(--title-large-fs);
`;
