'use client';
import React from 'react';
import { Button } from './ButtonUI.styled';

const ButtonUI = (props) => {
  const {
    children,
    text,
    disabled = true,
    clickFunc,
    fontSize,
    fontWeight,
    textAlign,
    display,
    justifyContent,
    gap,
  } = props;
  return (
    <Button
      type="button"
      onClick={() => clickFunc()}
      disabled={disabled}
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        textAlign: textAlign,
        display: display,
        justifyContent: justifyContent,
        gap: gap,
      }}>
      {children}
      {text}
    </Button>
  );
};

ButtonUI.displayName = 'ButtonUI';

export default ButtonUI;
