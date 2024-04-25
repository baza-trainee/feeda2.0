'use client';
import React from 'react';
import {
  Section,
  InputWrapper,
  Input,
  Title,
} from './EmailInput.styled';

const EmailInput = ({ title, errorText }) => {
  return (
    <Section>
      {!!title && <Title htmlFor={title}>{title}</Title>}
      <InputWrapper>
        <Input
          id="emailInput"
          type="email"
          placeholder="E-mail"
          errorText={errorText}
        />
      </InputWrapper>
      {!!errorText && (
        <ErrorMessage htmlFor={errorText}>
          {errorText}
        </ErrorMessage>
      )}
    </Section>
  );
};

EmailInput.displayName = 'EmailInput';

export default EmailInput;
