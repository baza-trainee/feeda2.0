'use client';
import React, { useState, useEffect } from 'react';
import { textValidationSchema } from '../../../schemas/validationSchemas';
import {
  Section,
  InputWrapper,
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
      <InputWrapper>
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleFieldChange}
        />
        {!!errorText && (
          <ErrorMessage htmlFor="textInput">
            {errorText}
          </ErrorMessage>
        )}
      </InputWrapper>
    </Section>
  );
};

TextInput.displayName = 'TextInput';

export default TextInput;
