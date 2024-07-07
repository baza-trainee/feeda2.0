'use client';
import React from 'react';
import {
  Section,
  Input,
  Text,
  LinkWrapper,
} from './CheckboxUI.styled';

const CheckboxUI = ({ path, id, name, title }) => {
  return (
    <Section>
      <Input
        id={id}
        type="checkbox"
        name={name}
        title={title}
      />
      <Text htmlFor={id}>Запамʼятати пароль</Text>
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
