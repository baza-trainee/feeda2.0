import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  width: 398px;
  height: 48px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

export const Text = styled.label`
  font-size: var(--body-medium-fs);
  font-weight: var(--body-large-fw);
  line-height: var(--body-large-lh);
  letter-spacing: 0.10000000149011612px;

  cursor: pointer;
`;

export const Input = styled.input`
  cursor: pointer;
  &[type='checkbox'] {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
`;

export const LinkWrapper = styled(NavLink)`
  margin-left: 110px;
  font-size: var(--body-large-fs);
  font-weight: var(--body-large-fw);
  line-height: var(--body-large-lh);
  color: inherit;
  text-decoration: underline;
`;
