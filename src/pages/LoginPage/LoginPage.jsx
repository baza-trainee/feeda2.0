import React, { useState } from 'react';
import AuthForm from '../../components/UI/AuthForm/AuthForm';
import handleSubmit from '../../handlers/handleSubmit';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
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

export default LoginPage;
