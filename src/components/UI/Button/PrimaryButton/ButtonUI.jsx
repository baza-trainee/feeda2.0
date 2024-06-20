'use client';
import React from 'react';
import { Button } from './ButtonUI.styled';

const ButtonUI = ({
  text,
  width = '100%',
  disabled = true,
  backgroundColor = '#ffbd00',
  color = 'black',
  clickFunc,
}) => {
  return (
    <Button
      type="button"
      onClick={() => clickFunc()}
      disabled={disabled}
      style={{
        width: `${width}`,
        backgroundColor: `${backgroundColor}`,
        color: `${color}`,
      }}>
      {text}
    </Button>
  );
};

ButtonUI.displayName = 'ButtonUI';

export default ButtonUI;
