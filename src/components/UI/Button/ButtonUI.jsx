"use client";
import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 389px; 
  height: 56px;
  position: relative;
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: #ffbd00;
  color: black;
  width: 389px; 
  height: 56px;
  border: none;
  border-radius: 4px;
  padding: 0;
  cursor: pointer;
font-size: 22px;
font-weight: 700;
line-height: 26.4px;
text-align: center; 
`;

const ButtonUI = () => {
  return (
    <Section>
      <Button onClick={() => console.log("clicked")}>Зареєструватися</Button>
    </Section>
  );
};

ButtonUI.displayName = "ButtonUI";

export default ButtonUI;
