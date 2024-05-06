import React from 'react'

import LoginInput from '../LoginInput/LoginInput'
import PasswordInput from '../PasswordInput/PasswordInput'
import ButtonUI from '../Button/ButtonUI'
import CheckboxUI from '../ChecboxUI/CheckboxUI'
import EmailInput from '../EmailInputUI/EmailInput'
import AuthTitle from '../AuthTitle/AuthTitle'
import { AuthContainer, FormContainer, FormStyled } from './AuthForm.styled'
import { NavLink, useLocation } from 'react-router-dom'
import { DescrStyled } from '../AuthTitle/AuthTitle.styled'

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
      pathname === "/forgot-pass" && <>
      <AuthTitle>Відновити пароль</AuthTitle>
      <DescrStyled>
Введіть електронну пошту, пов'язану з вашим обліковим записом, і ми надішлемо лист з посиланням для зміни пароля
      </DescrStyled>
     
      </>
      
    }
    
<FormStyled>
{(pathname === "/register" || pathname === "/login")  && <LoginInput title={"Логін"}/>}
{(pathname === "/register" || 
pathname === "/forgot-pass") && <EmailInput title={'E-mail'}/> }
  {pathname !== "/forgot-pass" && <PasswordInput title={"Пароль"}/>} 
  {pathname === "/register" && <PasswordInput title={"Повторіть пароль"}/>}
  {pathname !=="/forgot-pass" && <CheckboxUI path={pathname}/>}
  {pathname === "/register" && <ButtonUI text = {"Зареєструватись"}  disabled={false} clickFunc={submitForm}/>}
  {pathname === "/login" && <ButtonUI text = {"Вхід"}  disabled={false} clickFunc={submitForm}/>}
  {pathname === "/forgot-pass" && <ButtonUI text = {"Надіслати"}  disabled={false} clickFunc={submitForm}/>}
</FormStyled>
  </FormContainer>
  {pathname ==="/login" && <NavLink to="/register">Зареєструватись</NavLink>}
  {(pathname ==="/register" || pathname ==="/forgot-pass") && <NavLink to="/login">Вхід</NavLink>}
  
  </AuthContainer>
  

  </>
  )
}

export default AuthForm