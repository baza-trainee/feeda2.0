import React from 'react';
import {
  Section,
  InputWrapper,
  Title,
  Input,
} from './PhoneInput.styled';

const PhoneInput = ({ title, errorText, placeholder }) => {
  return (
    <Section>
      {!!title && <Title htmlFor={title}>{title}</Title>}
      <InputWrapper>
        <Input
          id="phoneInput"
          type="number"
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

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
