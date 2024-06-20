import React from 'react';
import { SettingsFormSection } from './SettigsForm.styled';
import LoginInput from '../../LoginInput/LoginInput';
import EmailInput from '../../EmailInputUI/EmailInput';
import PhoneInput from '../../PhoneInput/PhoneInput';

const SettingsForm = () => {
  return (
    <SettingsFormSection>
      <LoginInput title="Імʼя" placeholder="Імʼя" />
      <EmailInput
        title="Електронна пошта"
        placeholder="Електронна пошта"
      />
      <LoginInput title="Прізвище" placeholder="Прізвище" />
      <PhoneInput title="Телефон" placeholder="Телефон" />
    </SettingsFormSection>
  );
};

export default SettingsForm;
