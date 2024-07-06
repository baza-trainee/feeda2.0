import React, { useState, useEffect } from 'react';
import { dateValidationSchema } from '../../../schemas/validationSchemas';
import {
  Section,
  Title,
  Input,
  ErrorMessage,
} from './DateInput.styled';
import { handleOnChange } from '../../../handlers/handlers';

const DateInput = ({
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
        await dateValidationSchema.validate(
          { date: value },
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
        type="date"
        placeholder={placeholder}
        value={value}
        onChange={handleFieldChange}
      />
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
