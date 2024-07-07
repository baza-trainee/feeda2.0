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
        title="Пароль"
        id="passwordInput"
        name="passwordInput"
        value={formData.password}
        onChange={handleFieldChange('password')}
        autoComplete="new-password"
      />
      <PasswordInput
        title="Повторити пароль"
        id="repeatPasswordInput"
        name="repeatPasswordInput"
        value={formData.repeatedPassword}
        onChange={handleFieldChange('repeatedPassword')}
        autoComplete="new-password"
      />
    </SettingsPasswordSection>
  );
};

export default SettingsPassword;
