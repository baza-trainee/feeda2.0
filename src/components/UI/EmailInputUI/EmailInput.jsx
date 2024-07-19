'use client';
import React, { useState, useEffect } from 'react';
import { emailValidationSchema } from '../../../schemas/validationSchemas';
import {
  Section,
  Input,
  Title,
  ErrorMessage,
} from './EmailInput.styled';
import { handleOnChange } from '../../../handlers/handlers';

const EmailInput = ({
  title,
  autoComplete,
  placeholder,
  value,
  onChange,
  id,
  name,
}) => {
  const [errorText, setErrorText] = useState('');
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    const validateInput = async () => {
      if (!empty) return;
      let error = '';
      try {
        await emailValidationSchema.validate(
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

  const handleFieldChange = handleOnChange(
    setEmpty,
    onChange
  );

  return (
    <Section>
      {!!title && <Title htmlFor={id}>{name}</Title>}
      <Input
        type="email"
        id={id}
        name={name}
        title={title}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        onChange={handleFieldChange}
      />
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
