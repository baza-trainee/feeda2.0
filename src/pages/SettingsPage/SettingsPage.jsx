import React, { useState } from 'react';
import SettingsHeader from '../../components/UI/Settings/SettingsHeader/SettingsHeader';
import SettingsForm from '../../components/UI/Settings/SettingsForm/SettingsForm';
import { SettingsSection } from './SettingsPage.styled';
import SettingsPassword from '../../components/UI/Settings/SettingsPassword/SettingsPassword';
import ButtonArea from '../../components/UI/Settings/ButtonArea/ButtonArea';

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    phone: '',
    password: '',
    repeatedPassword: '',
  });

  const handleSubmit = () => {
    console.log('Form data:', formData);
  };

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
        onSubmit={handleSubmit}
        onReset={handleReset}
      />
    </SettingsSection>
  );
};

export default SettingsPage;
