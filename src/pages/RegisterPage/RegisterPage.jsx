import React, { useState } from 'react';
import AuthForm from '../../components/UI/AuthForm/AuthForm';
import { handleSubmit } from '../../handlers/handlers';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    email: '',
    repeatedPassword: '',
  });

  const handleFormSubmit = () => handleSubmit(formData);

  return (
    <AuthForm
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleFormSubmit}
    />
  );
};

export default RegisterPage;
