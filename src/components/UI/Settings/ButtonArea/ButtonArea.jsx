import React from 'react';
import { ButtonAreaSection } from './ButtonArea.styled';
import ButtonUI from '../../Button/PrimaryButton/ButtonUI';
import SecondaryButton from '../../Button/SecondaryButton/SecondaryButton';

const ButtonArea = () => {
  return (
    <ButtonAreaSection>
      <SecondaryButton text="Cкасувати" />
      <ButtonUI
        text="Скасувати"
        disabled={false}
        width="331px"
        clickFunc={() =>
          console.log('Має відправляти форму')
        }
        backgroundColor="#232323"
        color="#fcfcfc"
      />
    </ButtonAreaSection>
  );
};

export default ButtonArea;
