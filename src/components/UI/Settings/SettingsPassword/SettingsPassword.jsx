import React from 'react';
import { SettingsPasswordSection } from './SettingsPassword.styled';
import PasswordInput from '../../PasswordInput/PasswordInput';
import { handleChange } from '../../../../handlers/handlers';

const SettingsPassword = ({ formData, setFormData }) => {
  const handleFieldChange = handleChange(
    setFormData,
    formData
  );
  return (
    <SettingsPasswordSection autoComplete="on">
      <PasswordInput
        title="Введіть Ваш пароль"
        id="passwordInput"
        name="Пароль"
        value={formData.password}
        onChange={handleFieldChange('password')}
        autoComplete="new-password"
      />
      <PasswordInput
        title="Повторно введіть ваш пароль"
        id="repeatPasswordInput"
        name="Повторити пароль"
        value={formData.repeatedPassword}
        onChange={handleFieldChange('repeatedPassword')}
        autoComplete="new-password"
      />
    </SettingsPasswordSection>
  );
};

export default SettingsPassword;
