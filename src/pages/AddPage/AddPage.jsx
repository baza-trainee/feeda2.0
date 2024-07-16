import React, { useState } from 'react';
import AddCandidatesSection from '../../components/UI/AddCandidatesSection/AddCandidatesSection';
import { handleSubmit } from '../../handlers/handlers';

const AddPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    specialization: '',
    linkedin: '',
    email: '',
    phone: '',
    city: '',
    status: '',
    interwiewDate: '2024-01-01',
    listDate: '2024-01-01',
  });

  const handleFormSubmit = () => handleSubmit(formData);

  return (
    <AddCandidatesSection
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleFormSubmit}></AddCandidatesSection>
  );
};

export default AddPage;
