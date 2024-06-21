import React from 'react';
import { SettingsFormSection } from './SettigsForm.styled';
import TextInput from '../../TextInput/TextInput';
import EmailInput from '../../EmailInputUI/EmailInput';
import PhoneInput from '../../PhoneInput/PhoneInput';

const SettingsForm = () => {
  return (
    <SettingsFormSection>
      <TextInput title="Імʼя" placeholder="Імʼя" />
      <EmailInput
        title="Електронна пошта"
        placeholder="Електронна пошта"
      />
      <TextInput title="Прізвище" placeholder="Прізвище" />
      <PhoneInput title="Телефон" placeholder="Телефон" />
    </SettingsFormSection>
  );
};

export default SettingsForm;
