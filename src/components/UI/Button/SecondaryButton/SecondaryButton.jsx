'use client';
import React from 'react';
import { Button } from './SecondaryButton.styled';

const ButtonUI = ({ text, disabled = true, clickFunc }) => {
  return (
    <Button
      type="button"
      disabled={disabled}
      onClick={() => clickFunc()}>
      {text}
    </Button>
  );
};

ButtonUI.displayName = 'ButtonUI';

export default ButtonUI;
