import styled from 'styled-components';

export const Section = styled.div`
  width: 398px;
  height: 48px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

export const Text = styled.span`
  font-size: var(--body-medium-fs);
  font-weight: var(--body-large-fw);
  line-height: var(--body-large-lh);
  letter-spacing: 0.10000000149011612px;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.input`
  &[type="checkbox"] {
    width: 18px;
    height: 18px;
    margin-right: 10px;

`;

export const LinkWrapper = styled.div`
  margin-left: 110px;
  font-size: var(--body-large-fs);
  font-weight: var(--body-large-fw);
  line-height: var(--body-large-lh);
`;
