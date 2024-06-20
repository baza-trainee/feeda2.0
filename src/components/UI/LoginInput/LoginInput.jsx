import React, { useState } from 'react';
import {
  Section,
  InputWrapper,
  Title,
  Input,
} from './LoginInput.styled';

const LoginInput = ({ title, errorText, placeholder }) => {
  return (
    <Section>
      {!!title && <Title htmlFor={title}>{title}</Title>}
      <InputWrapper>
        <Input
          id="loginInput"
          type="text"
          placeholder={placeholder}
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

LoginInput.displayName = 'LoginInput';

export default LoginInput;
