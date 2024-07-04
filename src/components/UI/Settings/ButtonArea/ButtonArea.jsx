import React from 'react';
import { ButtonAreaSection } from './ButtonArea.styled';
import SecondaryButton from '../../Button/SecondaryButton/SecondaryButton';
import PrimaryButton from '../../Button/PrimaryButton/PrimaryButton';

const ButtonArea = ({ onSubmit, onReset }) => {
  return (
    <ButtonAreaSection>
      <SecondaryButton
        disabled={false}
        clickFunc={onReset}
        width="113px"
        height="56px"
        borderRadius="4px">
        <span>Скасувати</span>
      </SecondaryButton>
      <PrimaryButton
        disabled={false}
        clickFunc={onSubmit}
        width="331px">
        <span>Зберігти зміни</span>
      </PrimaryButton>
    </ButtonAreaSection>
  );
};

export default ButtonArea;
