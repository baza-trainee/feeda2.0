import styled from 'styled-components';

export const Section = styled.div`
  width: 389px;
  height: 79px;
  margin: 0 auto;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Title = styled.label`
  font-size: var(--body-large-fs);
  font-weight: var(--body-large-fw);
  line-height: var(--body-large-lh);
  text-align: left;
  margin: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 53px;
  color: var(--dark-35);
  background-color: var(--white-text);
  border: 1px solid var(--inputs-border);
  border-radius: 4px;
  font-size: var(--body-large-fs);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 16px;
  position: relative;
  margin-top: 5px;
`;
