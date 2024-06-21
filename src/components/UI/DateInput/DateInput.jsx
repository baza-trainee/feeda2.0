import React from 'react';
import {
  Section,
  InputWrapper,
  Title,
  Input,
} from './DateInput.styled';

const DateInput = ({ title, errorText, placeholder }) => {
  return (
    <Section>
      {!!title && <Title htmlFor={title}>{title}</Title>}
      <InputWrapper>
        <Input
          type="date"
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

DateInput.displayName = 'DateInput';

export default DateInput;
