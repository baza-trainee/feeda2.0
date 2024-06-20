'use client';
import React from 'react';
import { Button } from './SecondaryButton.styled';

const ButtonUI = ({ text, clickFunc }) => {
  return (
    <Button type="button" onClick={() => clickFunc()}>
      {text}
    </Button>
  );
};

ButtonUI.displayName = 'ButtonUI';

export default ButtonUI;
