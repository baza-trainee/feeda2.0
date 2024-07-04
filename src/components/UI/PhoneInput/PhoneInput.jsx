import React, { useState, useEffect } from 'react';
import { object, string } from 'yup';
import {
  Section,
  InputWrapper,
  Title,
  Input,
  ErrorMessage,
} from './PhoneInput.styled';

const PhoneInput = ({
  title,
  placeholder,
  value,
  onChange,
}) => {
  const [errorText, setErrorText] = useState('');
  const [empty, setEmpty] = useState(false);

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

  useEffect(() => {
    const validateInput = async () => {
      if (!empty) return;
      let error = '';
      try {
        await validationSchema.validate(
          { phone: value },
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
          type="text"
          placeholder={placeholder}
          value={value}
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
