import styled from 'styled-components';

export const DropdownButton = styled.button`
  background: var(--dark-35);
  width: 286px;
  color: var(--white-text);
  font-size: 16px;
  font-weight: 600;
  height: 56px;
  border-radius: 4px;
  border: none;
  display: flex;
  justify-content: space-around;
  gap: 8px;
  text-align: left;
  align-items: center;
  padding: 24px;
  margin-bottom: 16px;
  cursor: pointer;

  &:hover {
    color: var(--yellow);
  }

  &:active,
  &:focus {
    background-color: var(--yellow);
    color: var(--dark-35);
  }
`;

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 246px;
  margin: 16px 0 16px 40px;
`;

export const DropdownItem = styled.button`
  display: flex;
  flex-direction: row;
  height: 40px;
  background-color: inherit;
  border: none;
  border-radius: 5px;
  margin-bottom: 8px;
  cursor: pointer;
  text-align: left;
  padding: 10px;

  &:hover {
    background-color: var(--sidebar-buttons-active);
  }

  &:active,
  &:focus {
    background-color: var(--yellow);
    color: var(--dark-35);
  }
`;

export const ButtonText = styled.p`
  width: 206px;
  margin-left: 16px;
`;

export const UsersIcon = styled.img`
  width: 18px;
  height: 16px;
`;

export const SettingsButton = styled.button`
  background: var(--dark-35);
  width: 286px;
  color: var(--white-text);
  font-size: 16px;
  font-weight: 600;
  height: 56px;
  border-radius: 4px;
  border: none;
  display: flex;
  justify-content: space-around;
  gap: 8px;
  text-align: left;
  align-items: center;
  padding: 24px;
  margin-top: 16px;
  cursor: pointer;

  &:hover {
    color: var(--yellow);
  }

  &:active,
  &:focus {
    background-color: var(--yellow);
    color: var(--dark-35);
  }
`;
