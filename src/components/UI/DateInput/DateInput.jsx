import React, { useState } from 'react';
import * as Yup from 'yup';
import {
  Section,
  InputWrapper,
  Title,
  Input,
  ErrorMessage,
} from './DateInput.styled';

const DateInput = ({ title, placeholder }) => {
  const [date, setDate] = useState('');
  const [errorText, setErrorText] = useState('');

  const validationSchema = Yup.object().shape({
    interwiewDate: Yup.date().required(
      'Поле обовʼязкове для заповнення'
    ),
    // make separate validation schema file for all validations
    // need two different validation for interwiew date and request date
    // .max(
    //   new Date(),
    //   'Дата не може бути пізніше поточної дати'
    // )
    // .min(
    //   new Date(),
    //   'Дата не може бути раніше поточної дати'
    // ),
  });

  const handleChange = async (event) => {
    const inputValue = event.target.value;
    setDate(inputValue);
    let error = '';

    try {
      await validationSchema.validate(
        { interwiewDate: inputValue },
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
          type="date"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </InputWrapper>
      {!!errorText && (
        <ErrorMessage htmlFor={errorText}>
          {errorText}
        </ErrorMessage>
      )}
    </Section>
  );
};

DateInput.displayName = 'DateInput';

export default DateInput;
