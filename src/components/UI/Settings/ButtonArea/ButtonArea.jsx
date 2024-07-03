import React from 'react';
import { ButtonAreaSection } from './ButtonArea.styled';
import SecondaryButton from '../../Button/SecondaryButton/SecondaryButton';
import PrimaryButton from '../../Button/PrimaryButton/PrimaryButton';

const ButtonArea = () => {
  return (
    <ButtonAreaSection>
      <SecondaryButton
        disabled={false}
        clickFunc={() =>
          console.log('Має скидувати всі інпути')
        }
        width="113px"
        height="56px"
        borderRadius="4px">
        <span>Скасувати</span>
      </SecondaryButton>
      <PrimaryButton
        disabled={false}
        clickFunc={() =>
          console.log('Має ідправляти форму')
        }
        width="331px">
        <span>Зберігти зміни</span>
      </PrimaryButton>
    </ButtonAreaSection>
  );
};

export default ButtonArea;
