'use client';
import React, { useState } from 'react';
import { object, string } from 'yup';
import {
  Section,
  InputWrapper,
  Input,
  Title,
  ErrorMessage,
} from './EmailInput.styled';

const EmailInput = ({ title, placeholder }) => {
  const [email, setEmail] = useState('');
  const [errorText, setErrorText] = useState('');

  // make separate validation schema file for all validations
  const validationSchema = object().shape({
    email: string()
      .email('Неправильний формат електронної пошти')
      .required(
        `Поле електронної пошти обов'язкове для заповнення`
      ),
  });

  const handleChange = async (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    let error = '';

    try {
      await validationSchema.validate(
        { email: newEmail },
        { abortEarly: false }
      );
    } catch (validationError) {
      error = validationError.errors.join(' ');
    }

    setErrorText(error);
  };

  return (
    <Section>
      {!!title && <Title htmlFor={title}>{title}</Title>}
      <InputWrapper>
        <Input
          id="emailInput"
          type="email"
          placeholder={placeholder}
          value={email}
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
