'use client';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import {
  Section,
  InputWrapper,
  Title,
  Input,
  Icon,
  ErrorMessage,
} from './PasswordInput.styled';

const PasswordInput = ({ title, value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [empty, setEmpty] = useState(false);

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

  useEffect(() => {
    const validateInput = async () => {
      if (!empty) return;
      let error = '';
      try {
        await validationSchema.validate(
          { password: value },
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
  const handleChange = async (event) => {
    if (!empty) setEmpty(true);
    onChange(event.target.value);
  };

  return (
    <Section>
      {!!title && <Title htmlFor={title}>{title}</Title>}
      <InputWrapper>
        <Input
          type={inputType}
          placeholder="Пароль"
          value={value}
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
