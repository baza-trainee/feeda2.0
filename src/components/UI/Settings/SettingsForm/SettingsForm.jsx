import React from 'react';
import { SettingsFormSection } from './SettigsForm.styled';
import TextInput from '../../TextInput/TextInput';
import EmailInput from '../../EmailInputUI/EmailInput';
import PhoneInput from '../../PhoneInput/PhoneInput';
import { handleChange } from '../../../../handlers/handlers';

const SettingsForm = ({ formData, setFormData }) => {
  const handleFieldChange = handleChange(
    setFormData,
    formData
  );
  return (
    <SettingsFormSection autoComplete="on">
      <TextInput
        title="Введіть Ваше імʼя"
        id="name"
        name="Імʼя"
        placeholder="Імʼя"
        value={formData.firstName}
        onChange={handleFieldChange('firstName')}
        autoComplete="given-name"
      />
      <EmailInput
        title="Введіть Вашу електронну пошту"
        id="Email"
        name="Електронна пошта"
        placeholder="Електронна пошта"
        value={formData.email}
        onChange={handleFieldChange('email')}
        autoComplete="email"
      />
      <TextInput
        title="Введіть Ваше прізвище"
        id="surname"
        name="Прізвище"
        placeholder="Прізвище"
        value={formData.secondName}
        onChange={handleFieldChange('secondName')}
        autoComplete="family-name"
      />
      <PhoneInput
        title="Введіть Ваш номер телефону"
        id="PhoneInput"
        name="Телефон"
        placeholder="+380*********"
        value={formData.phone}
        onChange={handleFieldChange('phone')}
        autoComplete="tel"
      />
    </SettingsFormSection>
  );
};

export default SettingsForm;
