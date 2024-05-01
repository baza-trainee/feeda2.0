import React from 'react'
import { Title } from '../EmailInputUI/EmailInput.styled'
import LoginInput from '../LoginInput/LoginInput'
import PasswordInput from '../PasswordInput/PasswordInput'
import ButtonUI from '../Button/ButtonUI'
import CheckboxUI from '../ChecboxUI/CheckboxUI'
import EmailInput from '../EmailInputUI/EmailInput'
import AuthTitle from '../AuthTitle/AuthTitle'
import { AuthContainer, FormContainer, FormStyled } from './AuthForm.styled'
import { NavLink, useLocation } from 'react-router-dom'

const AuthForm = () => {
  const {pathname} =useLocation();

  const submitForm = () => {
    console.log('Submit form')
    console.log(pathname)
  }
  return (
  <>
  <AuthContainer>
  <FormContainer>
    {
      pathname === "/register" && <AuthTitle>Реєстрація</AuthTitle>
    }
    {
      pathname === "/login" && <AuthTitle>Вхід</AuthTitle>
    }
    {
      pathname === "/forgot-pass" && <AuthTitle>Відновити пароль</AuthTitle>
    }
<FormStyled>
{pathname === "/register" || pathname === "/login"  && <LoginInput title={"Логін"}/>}
{pathname === "/register" || 
pathname === "/forgot-pass" && <EmailInput title={'E-mail'}/> }
  {pathname !== "/forgot-pass" && <PasswordInput title={"Пароль"}/>} 
  {pathname === "/register" && <PasswordInput title={"Повторіть пароль"}/>}
  <CheckboxUI/>
  <ButtonUI disabled={false} clickFunc={submitForm}/>
</FormStyled>
  </FormContainer>
  {pathname ==="/login" && <NavLink to="/register">Зареєструватись</NavLink>}
  {pathname ==="/register" || pathname ==="/forgot-pass" && <NavLink to="/register">Вхід</NavLink>}
  </AuthContainer>
  

  </>
  )
}

export default AuthForm