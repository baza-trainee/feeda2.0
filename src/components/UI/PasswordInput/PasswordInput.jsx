'use client';
import React, { useState } from 'react';
import {
  Section,
  InputWrapper,
  Title,
  Input,
  Icon,
} from './PasswordInput.styled';

const PasswordInput = ({ title, errorText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputType = isEditing ? 'text' : 'password';
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Section>
      {!!title && <Title htmlFor={title}>{title}</Title>}
      <InputWrapper>
        <Input
          id="passwordInput"
          type={inputType}
          placeholder="Пароль"
          errorText={errorText}
        />
        <label htmlFor="passwordInput">
          <Icon
            src="./notEyeIcon.svg"
            onClick={() => handleEditToggle()}
          />
        </label>
      </InputWrapper>
      {!!errorText && (
        <ErrorMessage htmlFor={errorText}>
          {errorText}
        </ErrorMessage>
      )}
    </Section>
  );
};

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
