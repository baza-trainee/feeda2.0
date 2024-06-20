import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--white);
  color: black;
  border: none;
  padding: 16px;
  cursor: pointer;
  font-family: Exo 2;
  font-size: var(--title-medium-fs);
  font-weight: var(--title-medium-fw);
  text-align: center;
  margin-right: 12px;

  &:disabled {
    background-color: var(--disabled-button);
    color: var(--grey);
  }
`;
