"use client";
import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 389px;
  height: 79px;
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Title = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  text-align: left;
  margin: 5px;
`;

const Input = styled.input`
width: 357px;
height: 19px;
color: #939393;
background-color: #FCFCFC;
border: 1px solid #F6F6F6;
border-radius: 4px;
font-size: 16px;
display: flex;
align-items: center;
justify-content: center;
padding: 15px 16px;
position: relative;
margin-top: 5px;
`;

const EmailInput = ({ title, errorText }) => {
  return (
    <Section>
      {!!title && <Title htmlFor={title}>{title}</Title>}
      <InputWrapper>
        <Input
          id="emailInput"
          type="email"
          placeholder="E-mail"
          errorText={errorText}
        />
      </InputWrapper>
      {!!errorText && (
        <ErrorMessage htmlFor={errorText}>{errorText}</ErrorMessage>
      )}
    </Section>
  );
};

EmailInput.displayName = "EmailInput";

export default EmailInput;
