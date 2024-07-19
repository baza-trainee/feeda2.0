import React, { useState, useEffect } from 'react';
import { phoneValidationSchema } from '../../../schemas/validationSchemas';
import {
  Section,
  Title,
  Input,
  ErrorMessage,
} from './PhoneInput.styled';
import { handleOnChange } from '../../../handlers/handlers';

const PhoneInput = ({
  title,
  name,
  id,
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

      if (!value) {
        error =
          'Поле номера телефона обовʼязкове для заповнення';
      } else {
        try {
          await phoneValidationSchema.validate(
            { phone: value },
            { abortEarly: false }
          );
        } catch (validationError) {
          error = validationError.errors.join(' ');
        }
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
        type="text"
        title={title}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleFieldChange}
        autoComplete={autoComplete}
      />
      {!!errorText && (
        <ErrorMessage htmlFor={errorText}>
          {errorText}
        </ErrorMessage>
      )}
    </Section>
  );
};

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
