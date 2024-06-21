import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  background-color: var(--dark-35);
  color: var(--white-text);
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
  margin-bottom: 16px;

  &:hover {
    color: var(--yellow);
    border: solid var(--yellow) 1px;
  }

  &:active,
  &:focus {
    background-color: var(--yellow);
    color: var(--dark-35);
  }

  &:disabled {
    background-color: var(--disabled-button);
    color: var(--grey);
    border: none;
    cursor: default;
  }
`;
