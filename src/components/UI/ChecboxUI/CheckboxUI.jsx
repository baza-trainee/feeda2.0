'use client';
import React from 'react';
import {
  Section,
  Input,
  Text,
  LinkWrapper,
} from './CheckboxUI.styled';

const CheckboxUI = ({ path, id, name, title, value }) => {
  return (
    <Section>
      <Input
        id={id}
        type="checkbox"
        name={name}
        title={title}
        value={value}
      />
      <Text
        htmlFor={id}
        title="Натисніть, щоб запамʼятати пароль">
        {name}
      </Text>
      {path === '/login' && (
        <LinkWrapper
          to="/forgot-pass"
          title="Натисніть, якщо забули пароль">
          Забули пароль?
        </LinkWrapper>
      )}
    </Section>
  );
};

CheckboxUI.displayName = 'CheckboxUI';

export default CheckboxUI;
