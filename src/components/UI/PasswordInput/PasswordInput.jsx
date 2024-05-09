'use client';
import React, { useState } from 'react';
import * as Yup from 'yup';
import {
  Section,
  InputWrapper,
  Title,
  Input,
  Icon,
  ErrorMessage,
} from './PasswordInput.styled';

const PasswordInput = ({ title }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const inputType = isEditing ? 'text' : 'password';
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .test(
        'length',
        'Пароль має містити мінімум 8 символів',
        (value) => (value ? value.length >= 8 : true)
      )
      .required('Поле вводу паролю не може бути порожнім'),
  });

  const handleChange = async (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    let error = '';

    try {
      await validationSchema.validate(
        { password: newPassword },
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
          id="passwordInput"
          type={inputType}
          placeholder="Пароль"
          value={password}
          onChange={handleChange}
        />
        <label htmlFor="passwordInput">
          <Icon
            src="./notEyeIcon.svg"
            onClick={() => handleEditToggle()}
          />
        </label>
      </InputWrapper>
      {!!errorText && (
        <ErrorMessage>{errorText}</ErrorMessage>
      )}
    </Section>
  );
};

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
