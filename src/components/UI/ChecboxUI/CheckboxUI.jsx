'use client';
import React from 'react';
import {
  Section,
  Input,
  Text,
  LinkWrapper,
} from './CheckboxUI.styled';

const CheckboxUI = ({ path }) => {
  return (
    <Section>
      <Input id="checkbox" type="checkbox" />
      <Text htmlFor="checkbox">Запамʼятати пароль</Text>
      {path === '/login' && (
        <LinkWrapper to="/forgot-pass">
          Забули пароль?
        </LinkWrapper>
      )}
    </Section>
  );
};

CheckboxUI.displayName = 'CheckboxUI';

export default CheckboxUI;
