import React from 'react';
import { ButtonAreaSection } from './ButtonArea.styled';
import SettingsButton from '../../Button/SettingsButton/SettingsButton';
import SecondaryButton from '../../Button/SecondaryButton/SecondaryButton';

const ButtonArea = () => {
  return (
    <ButtonAreaSection>
      <SecondaryButton
        text="Cкасувати"
        disabled={true}
        clickFunc={() =>
          console.log('Має скидувати всі інпути')
        }
      />
      <SettingsButton
        text="Зберігти зміни"
        disabled={true}
        clickFunc={() =>
          console.log('Має ідправляти форму')
        }
      />
    </ButtonAreaSection>
  );
};

export default ButtonArea;
