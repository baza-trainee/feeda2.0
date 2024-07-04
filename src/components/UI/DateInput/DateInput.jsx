import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import {
  Section,
  InputWrapper,
  Title,
  Input,
  ErrorMessage,
} from './DateInput.styled';
import handleOnChange from '../../../handlers/handleOnChange';

const DateInput = ({
  title,
  placeholder,
  value,
  onChange,
}) => {
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

  const handleFieldChange = handleOnChange(
    setEmpty,
    onChange
  );

  return (
    <Section>
      {!!title && <Title htmlFor={title}>{title}</Title>}
      <InputWrapper>
        <Input
          type="date"
          placeholder={placeholder}
          value={value}
          onChange={handleFieldChange}
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
