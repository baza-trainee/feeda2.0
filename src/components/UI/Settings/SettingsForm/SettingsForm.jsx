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
        title="Імʼя"
        id="name"
        name="name"
        placeholder="Імʼя"
        value={formData.firstName}
        onChange={handleFieldChange('firstName')}
        autoComplete="given-name"
      />
      <EmailInput
        title="Електронна пошта"
        id="Email"
        name="email"
        placeholder="Електронна пошта"
        value={formData.email}
        onChange={handleFieldChange('email')}
        autoComplete="email"
      />
      <TextInput
        title="Прізвище"
        id="surname"
        name="surname"
        placeholder="Прізвище"
        value={formData.secondName}
        onChange={handleFieldChange('secondName')}
        autoComplete="family-name"
      />
      <PhoneInput
        title="Телефон"
        id="PhoneInput"
        name="PhoneInput"
        placeholder="+380*********"
        value={formData.phone}
        onChange={handleFieldChange('phone')}
        autoComplete="tel"
      />
    </SettingsFormSection>
  );
};

export default SettingsForm;
