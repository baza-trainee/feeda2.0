import React, { useState } from 'react';

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

const AuthForm = ({ formData, setFormData, onSubmit }) => {
  const { pathname } = useLocation();

  //make 1 handle for all elements
  const handleChange = (field) => (value) => {
    setFormData({ ...formData, [field]: value });
  };

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

          <FormStyled>
            {(pathname === '/register' ||
              pathname === '/login') && (
              <TextInput
                title={'Логін'}
                placeholder="Логін"
                value={formData.login}
                onChange={handleChange('login')}
              />
            )}
            {(pathname === '/register' ||
              pathname === '/forgot-pass') && (
              <EmailInput
                title={'E-mail'}
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange('email')}
              />
            )}
            {pathname !== '/forgot-pass' && (
              <PasswordInput
                title={'Пароль'}
                value={formData.password}
                onChange={handleChange('password')}
              />
            )}
            {pathname === '/register' && (
              <PasswordInput
                title={'Повторіть пароль'}
                value={formData.repeatedPassword}
                onChange={handleChange('repeatedPassword')}
              />
            )}
            {pathname !== '/forgot-pass' && (
              <CheckboxUI path={pathname} />
            )}
            {pathname === '/register' && (
              <PrimaryButton
                disabled={false}
                clickFunc={onSubmit}>
                <span>Зареєструватись</span>
              </PrimaryButton>
            )}
            {pathname === '/login' && (
              <PrimaryButton
                text={'Вхід'}
                disabled={false}
                clickFunc={onSubmit}>
                <span>Вхід</span>
              </PrimaryButton>
            )}
            {pathname === '/forgot-pass' && (
              <PrimaryButton
                text={'Надіслати'}
                disabled={false}
                clickFunc={onSubmit}>
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
