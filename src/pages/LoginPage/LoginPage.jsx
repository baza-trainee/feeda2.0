import React, { useState } from 'react';
import AuthForm from '../../components/UI/AuthForm/AuthForm';
import Layout from '../../components/Layout/Layout';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
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

export default LoginPage;
