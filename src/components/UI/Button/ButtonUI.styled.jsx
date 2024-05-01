import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  height: 56px;
  position: relative;
  margin: 0 auto;
`;

export const Button = styled.button`
  background-color: var(--yellow);
  color: black;
  width: 100%;
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

  &:disabled {
    background-color: var(--disabled-button);
    color: var(--grey);
  }
`;
