'use client';
import React from 'react';
import { Button } from './PrimaryButton.styled';

const PrimaryButton = (props) => {
  const {
    children,
    disabled = true,
    clickFunc,
    fontSize,
    fontWeight,
    textAlign,
    width,
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
        width: width,
      }}>
      {children}
    </Button>
  );
};

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
