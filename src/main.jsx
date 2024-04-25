import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import Title from "./components/UI/AuthTitle/AuthTitle.jsx";
import EmailInput from "./components/UI/EmailInputUI/EmailInput.jsx";
import LoginInput from "./components/UI/LoginInput/LoginInput.jsx";
import PasswordInput from "./components/UI/PasswordInput/PasswordInput.jsx";
import CheckboxUI from "./components/UI/ChecboxUI/CheckboxUI.jsx";
import ButtonUI from "./components/UI/Button/ButtonUI.jsx";
import styled from "styled-components";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Title />
    <EmailInput />
    <LoginInput />
    <PasswordInput />
    <CheckboxUI />
    <ButtonUI />
    </React.StrictMode>
);
