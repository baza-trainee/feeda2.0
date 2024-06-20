import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--yellow);
  color: black;
  height: 56px;
  border: none;
  border-radius: 4px;
  padding: 0;
  cursor: pointer;
  font-family: Exo 2;
  font-size: var(--title-large-fs);
  font-weight: var(--title-large-fw);
  line-height: var(--title-large-lh);
  text-align: center;

  &:hover {
    color: var(--yellow);
  }

  &:active,
  &:focus {
    background-color: var(--yellow);
    color: var(--dark-35);
  }

  &:disabled {
    background-color: var(--disabled-button);
    color: var(--grey);
  }
`;
