'use client';
import React from 'react';
import {
  Section,
  CheckboxWrapper,
  Input,
  Text,
  LinkWrapper,
} from './CheckboxUI.styled';

const CheckboxUI = () => {
  return (
    <Section>
      <CheckboxWrapper>
        <Input id="checkbox" type="checkbox" />
        <Text>Запамʼятати пароль</Text>
      </CheckboxWrapper>
      <LinkWrapper>Забули пароль?</LinkWrapper>
    </Section>
  );
};

CheckboxUI.displayName = 'CheckboxUI';

export default CheckboxUI;
