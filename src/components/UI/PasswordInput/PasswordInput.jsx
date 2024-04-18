"use client";
import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 398px;
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

const Icon = styled.img`
position: absolute;
top: 27px;
right: 15px;
transform: translateY(-50%);
width: 24px;
height: 24px;
`;

const PasswordInput = ({ title, errorText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputType = isEditing ? "text" : "password";
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Section>
      {!!title && <Title htmlFor={title}>{title}</Title>}
      <InputWrapper>
        <Input
          id="passwordInput"
          type={inputType}
          placeholder="Пароль"
          errorText={errorText}
        />
        <label htmlFor="passwordInput">
          <Icon src="./notEyeIcon.svg" onClick={() => handleEditToggle()} />
        </label>
      </InputWrapper>
      {!!errorText && (
        <ErrorMessage htmlFor={errorText}>{errorText}</ErrorMessage>
      )}
    </Section>
  );
};

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
