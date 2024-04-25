'use client';
import React from 'react';
import { Section, Button } from './ButtonUI.styled';

const ButtonUI = () => {
  return (
    <Section>
      <Button
        onClick={() => console.log('clicked')}
        disabled>
        Зареєструватися
      </Button>
    </Section>
  );
};

ButtonUI.displayName = 'ButtonUI';

export default ButtonUI;
