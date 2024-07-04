'use client';
import React, { useState, useEffect } from 'react';
import { object, string } from 'yup';
import {
  Section,
  InputWrapper,
  Input,
  Title,
  ErrorMessage,
} from './EmailInput.styled';

const EmailInput = ({
  title,
  placeholder,
  value,
  onChange,
}) => {
  const [errorText, setErrorText] = useState('');
  const [empty, setEmpty] = useState(false);

  // make separate validation schema file for all validations
  const validationSchema = object().shape({
    email: string()
      .email('Неправильний формат електронної пошти')
      .required(
        `Поле електронної пошти обов'язкове для заповнення`
      ),
  });

  useEffect(() => {
    const validateInput = async () => {
      if (!empty) return;
      let error = '';
      try {
        await validationSchema.validate(
          { email: value },
          { abortEarly: false }
        );
      } catch (validationError) {
        error = validationError.errors.join(' ');
      }
      setErrorText(error);
    };

    validateInput();
  }, [value, empty]);

  // looks like i can make 1 handler on all of files
  const handleChange = (event) => {
    if (!empty) setEmpty(true);
    onChange(event.target.value);
  };

  return (
    <Section>
      {!!title && <Title htmlFor={title}>{title}</Title>}
      <InputWrapper>
        <Input
          type="email"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        {!!errorText && (
          <ErrorMessage htmlFor="emailInput">
            {errorText}
          </ErrorMessage>
        )}
      </InputWrapper>
    </Section>
  );
};

EmailInput.displayName = 'EmailInput';

export default EmailInput;
