import React from 'react';
import SettingsHeader from '../../components/UI/Settings/SettingsHeader/SettingsHeader';
import SettingsForm from '../../components/UI/Settings/SettingsForm/SettingsForm';
import { SettingsSection } from './SettingsPage.styled';
import SettingsPassword from '../../components/UI/Settings/SettingsPassword/SettingsPassword';
import ButtonArea from '../../components/UI/Settings/ButtonArea/ButtonArea';

const SettingsPage = () => {
  return (
    <SettingsSection>
      <SettingsHeader />
      <SettingsForm />
      <SettingsPassword />
      <ButtonArea />
    </SettingsSection>
  );
};

export default SettingsPage;
