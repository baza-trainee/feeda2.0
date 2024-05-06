'use client';
import React from 'react';
import {
  Section,
  CheckboxWrapper,
  Input,
  Text,
  LinkWrapper,
} from './CheckboxUI.styled';

const CheckboxUI = ({path}) => {
  return (
    <Section>
      <CheckboxWrapper>
        <Input id="checkbox" type="checkbox" />
        <Text htmlFor='checkbox'>
          
          Запамʼятати пароль</Text>
      </CheckboxWrapper>
      {path==="/login" && <LinkWrapper to="/forgot-pass">Забули пароль?</LinkWrapper>}
    </Section>
  );
};

CheckboxUI.displayName = 'CheckboxUI';

export default CheckboxUI;
