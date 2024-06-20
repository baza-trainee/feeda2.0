'use client';
import React from 'react';
import { Button } from './SettingsButton.styled';

const ButtonUI = ({ text, disabled = true, clickFunc }) => {
  return (
    <Button
      type="button"
      onClick={() => clickFunc()}
      disabled={disabled}>
      {text}
    </Button>
  );
};

ButtonUI.displayName = 'ButtonUI';

export default ButtonUI;
