'use client';
import React, { useState } from 'react';
import { object, string } from 'yup';
import {
  Section,
  InputWrapper,
  Title,
  Input,
  ErrorMessage,
} from './TextInput.styled';

const TextInput = ({ title, placeholder }) => {
  const [text, setText] = useState('');
  const [errorText, setErrorText] = useState('');

  // make separate validation schema file for all validations

  const validationSchema = object().shape({
    name: string().required(
      'Поле обовʼязкове для заповнення'
    ),
  });

  const handleChange = async (event) => {
    const inputValue = event.target.value;
    setText(inputValue);
    let error = '';

    try {
      await validationSchema.validate(
        { name: inputValue },
        { abortEarly: false }
      );
    } catch (validationError) {
      error = validationError.errors.join(' ');
    }

    setErrorText(error);
  };

  return (
    <Section>
      {!!title && (
        <Title htmlFor={title}>{`${title}*`}</Title>
      )}
      <InputWrapper>
        <Input
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
        />
        {!!errorText && (
          <ErrorMessage htmlFor="textInpput">
            {errorText}
          </ErrorMessage>
        )}
      </InputWrapper>
    </Section>
  );
};

TextInput.displayName = 'TextInput';

export default TextInput;
