import React from 'react';
import { SettingsFormSection } from './SettigsForm.styled';
import TextInput from '../../TextInput/TextInput';
import EmailInput from '../../EmailInputUI/EmailInput';
import PhoneInput from '../../PhoneInput/PhoneInput';

const SettingsForm = ({ formData, setFormData }) => {
  const handleChange = (field) => (value) => {
    setFormData({ ...formData, [field]: value });
  };
  return (
    <SettingsFormSection>
      <TextInput
        title="Імʼя"
        placeholder="Імʼя"
        value={formData.firstName}
        onChange={handleChange('firstName')}
      />
      <EmailInput
        title="Електронна пошта"
        placeholder="Електронна пошта"
        value={formData.email}
        onChange={handleChange('email')}
      />
      <TextInput
        title="Прізвище"
        placeholder="Прізвище"
        value={formData.secondName}
        onChange={handleChange('secondName')}
      />
      <PhoneInput
        title="Телефон"
        placeholder="+380*********"
        value={formData.phone}
        onChange={handleChange('phone')}
      />
    </SettingsFormSection>
  );
};

export default SettingsForm;
