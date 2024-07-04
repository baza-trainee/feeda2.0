'use client';
import React, { useState, useEffect } from 'react';
import { object, string } from 'yup';
import {
  Section,
  InputWrapper,
  Title,
  Input,
  ErrorMessage,
} from './TextInput.styled';

const TextInput = ({
  title,
  placeholder,
  value,
  onChange,
}) => {
  const [errorText, setErrorText] = useState('');
  const [empty, setEmpty] = useState(false);

  // make separate validation schema file for all validations

  const validationSchema = object().shape({
    name: string().required(
      'Поле обовʼязкове для заповнення'
    ),
  });

  useEffect(() => {
    const validateInput = async () => {
      if (!empty) return;
      let error = '';
      try {
        await validationSchema.validate(
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
