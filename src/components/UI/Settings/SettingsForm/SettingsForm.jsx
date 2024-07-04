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
    <SettingsFormSection>
      <TextInput
        title="Імʼя"
        placeholder="Імʼя"
        value={formData.firstName}
        onChange={handleFieldChange('firstName')}
      />
      <EmailInput
        title="Електронна пошта"
        placeholder="Електронна пошта"
        value={formData.email}
        onChange={handleFieldChange('email')}
      />
      <TextInput
        title="Прізвище"
        placeholder="Прізвище"
        value={formData.secondName}
        onChange={handleFieldChange('secondName')}
      />
      <PhoneInput
        title="Телефон"
        placeholder="+380*********"
        value={formData.phone}
        onChange={handleFieldChange('phone')}
      />
    </SettingsFormSection>
  );
};

export default SettingsForm;
