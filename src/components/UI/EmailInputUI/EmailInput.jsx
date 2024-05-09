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

const EmailInput = ({ title }) => {
  const [email, setEmail] = useState('');
  const [errorText, setErrorText] = useState('');

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
          placeholder="E-mail"
          value={email}
          onChange={handleChange}
        />
      </InputWrapper>
      {!!errorText && (
        <ErrorMessage htmlFor="emailInput">
          {errorText}
        </ErrorMessage>
      )}
    </Section>
  );
};

EmailInput.displayName = 'EmailInput';

export default EmailInput;
