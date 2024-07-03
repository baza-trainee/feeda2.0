import React, { useState } from 'react';
import { object, string } from 'yup';
import {
  Section,
  InputWrapper,
  Title,
  Input,
  ErrorMessage,
} from './PhoneInput.styled';

const PhoneInput = ({ title, placeholder }) => {
  const [phone, setPhone] = useState('');
  const [errorText, setErrorText] = useState('');

  const phoneRegExp =
    /^(?!(\+?7|8)\d{10}$)\+?\d{1,3}?\d{9}$/;

  // make separate validation schema file for all validations

  const validationSchema = object().shape({
    phone: string()
      .required(
        'Поле номера телефону обовʼязкове для заповнення'
      )
      .matches(
        phoneRegExp,
        'Неправильний формат номера телефону (наприклад, +380501234567 або 0931234567)'
      ),
  });

  const handleChange = async (event) => {
    const inputValue = event.target.value;
    setPhone(inputValue);
    let error = '';

    try {
      await validationSchema.validate(
        { phone: inputValue },
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
          id="phoneInput"
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
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
