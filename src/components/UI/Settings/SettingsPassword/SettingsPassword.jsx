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
    <SettingsPasswordSection>
      <PasswordInput
        title="Пароль"
        value={formData.password}
        onChange={handleFieldChange('password')}
      />
      <PasswordInput
        title="Повторити пароль"
        value={formData.repeatedPassword}
        onChange={handleFieldChange('repeatedPassword')}
      />
    </SettingsPasswordSection>
  );
};

export default SettingsPassword;
