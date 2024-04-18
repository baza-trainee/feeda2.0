"use client";
import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 398px;
  height: 48px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

const Text = styled.span`
font-size: 14px;
font-weight: 400;
line-height: 16.8px;
letter-spacing: 0.10000000149011612px;
`;

const CheckboxWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

const Input = styled.input`
  &[type="checkbox"] {
    width: 18px;
    height: 18px;
    margin-right: 10px;

`;

const LinkWrapper = styled.div`
margin-left: 130px;
font-size: 16px;
font-weight: 400;
line-height: 19.2px;
`;

const CheckboxUI = () => {
  return (
    <Section>
      <CheckboxWrapper>
        <Input id="checkbox" type="checkbox" />
        <Text>Запамʼятати пароль</Text>
      </CheckboxWrapper>
      <LinkWrapper>Забули пароль?</LinkWrapper>
    </Section>
  );
};

CheckboxUI.displayName = "CheckboxUI";

export default CheckboxUI;
