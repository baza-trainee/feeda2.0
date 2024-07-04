import React, { useState } from 'react';
import AuthForm from '../../components/UI/AuthForm/AuthForm';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    email: '',
    repeatedPassword: '',
  });

  //make 1 handle for all elements
  const handleSubmit = () => {
    console.log('Form data:', formData);
  };
  return (
    <AuthForm
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
    />
  );
};

export default RegisterPage;
