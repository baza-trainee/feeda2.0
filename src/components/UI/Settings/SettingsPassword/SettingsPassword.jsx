import React from 'react';
import { SettingsPasswordSection } from './SettingsPassword.styled';
import PasswordInput from '../../PasswordInput/PasswordInput';

const SettingsPassword = ({ formData, setFormData }) => {
  const handleChange = (field) => (value) => {
    setFormData({ ...formData, [field]: value });
  };
  return (
    <SettingsPasswordSection>
      <PasswordInput
        title="Пароль"
        value={formData.password}
        onChange={handleChange('password')}
      />
      <PasswordInput
        title="Повторити пароль"
        value={formData.repeatedPassword}
        onChange={handleChange('repeatedPassword')}
      />
    </SettingsPasswordSection>
  );
};

export default SettingsPassword;
