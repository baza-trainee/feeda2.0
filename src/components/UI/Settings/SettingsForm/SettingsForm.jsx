import React from 'react';
import { SettingsFormSection } from './SettigsForm.styled';
import LoginInput from '../../LoginInput/LoginInput';
import EmailInput from '../../EmailInputUI/EmailInput';

const SettingsForm = () => {
  return (
    <SettingsFormSection>
      <LoginInput title="Імʼя" placeholder="Імʼя" />
      <EmailInput
        title="Електронна пошта"
        placeholder="Електронна пошта"
      />
      <LoginInput title="Прізвище" placeholder="Прізвище" />
      <LoginInput title="Телефон" placeholder="Телефон" />
    </SettingsFormSection>
  );
};

export default SettingsForm;
