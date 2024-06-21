'use client';
import React from 'react';
import { Button } from './SecondaryButton.styled';

const SecondaryButton = ({
  children,
  disabled = true,
  clickFunc,
  width,
  height,
  textAlign,
  padding,
  display,
  borderRadius,
  fontSize,
  fontWeight,
  marginBottom,
  marginRight,
  alignItems,
}) => {
  return (
    <Button
      type="button"
      disabled={disabled}
      onClick={() => clickFunc()}
      style={{
        width: width,
        height: height,
        textAlign: textAlign,
        padding: padding,
        display: display,
        borderRadius: borderRadius,
        fontSize: fontSize,
        fontWeight: fontWeight,
        marginBottom: marginBottom,
        marginRight: marginRight,
        alignItems: alignItems,
      }}>
      {children}
    </Button>
  );
};

SecondaryButton.displayName = 'SecondaryButton';

export default SecondaryButton;
