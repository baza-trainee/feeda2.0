import React from 'react';
import { ButtonAreaSection } from './ButtonArea.styled';
import SettingsButton from '../../Button/SettingsButton/SettingsButton';
import SecondaryButton from '../../Button/SecondaryButton/SecondaryButton';

const ButtonArea = () => {
  return (
    <ButtonAreaSection>
      <SecondaryButton text="Cкасувати" />
      <SettingsButton
        text="Скасувати"
        disabled={true}
        clickFunc={() =>
          console.log('Має відправляти форму')
        }
      />
    </ButtonAreaSection>
  );
};

export default ButtonArea;
