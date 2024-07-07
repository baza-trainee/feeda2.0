'use client';
import React, { useState, useEffect } from 'react';
import { textValidationSchema } from '../../../schemas/validationSchemas';
import {
  Section,
  Title,
  Input,
  ErrorMessage,
} from './TextInput.styled';
import { handleOnChange } from '../../../handlers/handlers';

const TextInput = ({
  title,
  placeholder,
  value,
  onChange,
  autoComplete,
}) => {
  const [errorText, setErrorText] = useState('');
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    const validateInput = async () => {
      if (!empty) return;
      let error = '';
      try {
        await textValidationSchema.validate(
          { name: value },
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
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleFieldChange}
        autoComplete={autoComplete}
      />
      {!!errorText && (
        <ErrorMessage htmlFor="textInput">
          {errorText}
        </ErrorMessage>
      )}
    </Section>
  );
};

TextInput.displayName = 'TextInput';

export default TextInput;
