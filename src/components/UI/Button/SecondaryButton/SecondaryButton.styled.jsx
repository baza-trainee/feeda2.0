import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--white-text);
  color: black;
  border: none;
  padding: 16px;
  cursor: pointer;
  font-family: Exo 2;
  font-size: var(--title-medium-fs);
  font-weight: var(--title-medium-fw);
  text-align: center;
  margin-right: 12px;
  margin-bottom: 16px;

  &:hover {
    background-color: var(--sidebar-buttons-active);
  }

  &:active,
  &:focus {
    background-color: var(--yellow);
    color: var(--dark-35);
  }

  &:disabled {
    background-color: var(--white-text);
    color: var(--disabled-button);
    cursor: default;
  }
`;
