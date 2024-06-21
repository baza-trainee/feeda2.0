import React from 'react';
import {
  Section,
  InputWrapper,
  Title,
  Input,
} from './TextInput.styled';

const TextInput = ({ title, errorText, placeholder }) => {
  return (
    <Section>
      {!!title && <Title htmlFor={title}>{title}</Title>}
      <InputWrapper>
        <Input
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

TextInput.displayName = 'LoginInput';

export default TextInput;
