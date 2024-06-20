import React from 'react';
import { SettingsFormSection } from './SettigsForm.styled';
import LoginInput from '../../LoginInput/LoginInput';
import EmailInput from '../../EmailInputUI/EmailInput';

const SettingsForm = () => {
  return (
    <SettingsFormSection>
      <LoginInput title="Імʼя" />
      <EmailInput title="Електронна пошта" />
      <LoginInput title="Прізвище" />
      <LoginInput title="Телефон" />
    </SettingsFormSection>
  );
};

export default SettingsForm;
