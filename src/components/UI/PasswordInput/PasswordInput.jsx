'use client';
import React, { useEffect, useState } from 'react';
import { passwordValidationSchema } from '../../../schemas/validationSchemas';
import {
  Section,
  InputWrapper,
  Title,
  Input,
  Icon,
  ErrorMessage,
} from './PasswordInput.styled';
import { handleOnChange } from '../../../handlers/handlers';

const PasswordInput = ({ title, value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [empty, setEmpty] = useState(false);

  const inputType = isEditing ? 'text' : 'password';
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    const validateInput = async () => {
      if (!empty) return;
      let error = '';
      try {
        await passwordValidationSchema.validate(
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

  const handleFieldChange = handleOnChange(
    setEmpty,
    onChange
  );

  return (
    <Section>
      {!!title && <Title htmlFor={title}>{title}</Title>}
      <InputWrapper>
        <Input
          type={inputType}
          placeholder="Пароль"
          value={value}
          onChange={handleFieldChange}
        />
        <label htmlFor="passwordInput">
          <Icon
            src="./notEyeIcon.svg"
            alt="image of hidden password"
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
