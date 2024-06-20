import React from 'react';
import { SettingsPasswordSection } from './SettingsPassword.styled';
import PasswordInput from '../../PasswordInput/PasswordInput';

const SettingsPassword = () => {
  return (
    <SettingsPasswordSection>
      {/*Так само як і в Settings form input трохи менший ніж сама форма */}
      {/* Змінити placeholderи */}
      <PasswordInput title="Пароль" />
      <PasswordInput title="Повторити пароль" />
    </SettingsPasswordSection>
  );
};

export default SettingsPassword;
