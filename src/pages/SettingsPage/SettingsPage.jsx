import React, { useState } from 'react';
import SettingsHeader from '../../components/UI/Settings/SettingsHeader/SettingsHeader';
import SettingsForm from '../../components/UI/Settings/SettingsForm/SettingsForm';
import { SettingsSection } from './SettingsPage.styled';
import SettingsPassword from '../../components/UI/Settings/SettingsPassword/SettingsPassword';
import ButtonArea from '../../components/UI/Settings/ButtonArea/ButtonArea';
import handleSubmit from '../../handlers/handleSubmit';

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    phone: '',
    password: '',
    repeatedPassword: '',
  });

  const handleFormSubmit = () => handleSubmit(formData);

  const handleReset = () => {
    setFormData({
      firstName: '',
      secondName: '',
      email: '',
      phone: '',
      password: '',
      repeatedPassword: '',
    });
  };

  return (
    <SettingsSection>
      <SettingsHeader />
      <SettingsForm
        formData={formData}
        setFormData={setFormData}
      />
      <SettingsPassword
        formData={formData}
        setFormData={setFormData}
      />
      <ButtonArea
        onSubmit={handleFormSubmit}
        onReset={handleReset}
      />
    </SettingsSection>
  );
};

export default SettingsPage;
