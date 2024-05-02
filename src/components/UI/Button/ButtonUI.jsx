'use client';
import React from 'react';
import { Section, Button } from './ButtonUI.styled';

const ButtonUI = ({disabled=true, clickFunc}) => {
  return (
    <Section>
      <Button
        type='button'
        onClick={() => clickFunc()}
        disabled={disabled}>
        Зареєструватися
      </Button>
    </Section>
  );
};

ButtonUI.displayName = 'ButtonUI';

export default ButtonUI;
