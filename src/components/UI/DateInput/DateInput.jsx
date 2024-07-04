import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import {
  Section,
  InputWrapper,
  Title,
  Input,
  ErrorMessage,
} from './DateInput.styled';

const DateInput = ({
  title,
  placeholder,
  value,
  onChange,
}) => {
  const [date, setDate] = useState('');
  const [errorText, setErrorText] = useState('');
  const [empty, setEmpty] = useState(false);

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

  useEffect(() => {
    const validateInput = async () => {
      if (!empty) return;
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
          type="date"
          placeholder={placeholder}
          value={value}
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
