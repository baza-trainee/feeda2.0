import React from 'react';

import TextInput from '../TextInput/TextInput';
import PasswordInput from '../PasswordInput/PasswordInput';
import PrimaryButton from '../Button/PrimaryButton/PrimaryButton';
import CheckboxUI from '../ChecboxUI/CheckboxUI';
import EmailInput from '../EmailInputUI/EmailInput';
import AuthTitle from '../AuthTitle/AuthTitle';
import {
  AuthContainer,
  FormContainer,
  FormStyled,
} from './AuthForm.styled';
import { NavLink, useLocation } from 'react-router-dom';
import { DescrStyled } from '../AuthTitle/AuthTitle.styled';
import { handleChange } from '../../../handlers/handlers';

const AuthForm = ({ formData, setFormData, onSubmit }) => {
  const { pathname } = useLocation();
  const handleFieldChange = handleChange(
    setFormData,
    formData
  );

  return (
    <>
      <AuthContainer>
        <FormContainer>
          {pathname === '/register' && (
            <AuthTitle>Реєстрація</AuthTitle>
          )}
          {pathname === '/login' && (
            <AuthTitle>Вхід</AuthTitle>
          )}
          {pathname === '/forgot-pass' && (
            <>
              <AuthTitle>Відновити пароль</AuthTitle>
              <DescrStyled>
                Введіть електронну пошту, пов'язану з вашим
                обліковим записом, і ми надішлемо лист з
                посиланням для зміни пароля
              </DescrStyled>
            </>
          )}

          <FormStyled autoComplete="on">
            {(pathname === '/register' ||
              pathname === '/login') && (
              <TextInput
                title="Введіть логін"
                id="login"
                name="Логін"
                placeholder="Логін"
                value={formData.login}
                onChange={handleFieldChange('login')}
                autoComplete="username"
              />
            )}
            {(pathname === '/register' ||
              pathname === '/forgot-pass') && (
              <EmailInput
                title="Введіть електронну пошту"
                id="EmailInput"
                name="E-mail"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleFieldChange('email')}
                autoComplete="email"
              />
            )}
            {pathname !== '/forgot-pass' && (
              <PasswordInput
                title="Введіть пароль"
                id="PasswordInput"
                name="Пароль"
                value={formData.password}
                onChange={handleFieldChange('password')}
                autoComplete="current-password"
              />
            )}
            {pathname === '/register' && (
              <PasswordInput
                title="Повторно введіть пароль"
                id="repeatPassword"
                name="Повторіть пароль"
                value={formData.repeatedPassword}
                onChange={handleFieldChange(
                  'repeatedPassword'
                )}
                autoComplete="new-password"
              />
            )}
            {pathname !== '/forgot-pass' && (
              <CheckboxUI
                path={pathname}
                id="checkbox"
                name="Запамʼятати пароль"
                title="Натисніть, щоб запамʼятати пароль"
              />
            )}
            {pathname === '/register' && (
              <PrimaryButton
                disabled={false}
                clickFunc={onSubmit}
                title="Натисніть для реєстрації">
                <span>Зареєструватись</span>
              </PrimaryButton>
            )}
            {pathname === '/login' && (
              <PrimaryButton
                text="Вхід"
                disabled={false}
                clickFunc={onSubmit}
                title="Натисніть для входу">
                <span>Вхід</span>
              </PrimaryButton>
            )}
            {pathname === '/forgot-pass' && (
              <PrimaryButton
                text="Надіслати"
                disabled={false}
                clickFunc={onSubmit}
                title="Натисніть для надсилання інформації на електронну пошту">
                <span>Надіслати</span>
              </PrimaryButton>
            )}
          </FormStyled>
        </FormContainer>
        {pathname === '/login' && (
          <NavLink to="/register">Зареєструватись</NavLink>
        )}
        {(pathname === '/register' ||
          pathname === '/forgot-pass') && (
          <NavLink to="/login">Вхід</NavLink>
        )}
      </AuthContainer>
    </>
  );
};

export default AuthForm;
