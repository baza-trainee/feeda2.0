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
  placeholder,
  value,
  onChange,
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
      {!!title && <Title htmlFor={title}>{title}</Title>}
      <Input
        type="email"
        placeholder={placeholder}
        value={value}
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
