import React, { useState } from 'react';
import AddCandidatesSection from '../../components/UI/AddCandidatesSection/AddCandidatesSection';
import { PageSection } from './AddPage.styled';
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
    interwiewDate: '',
    listDate: '',
  });

  const handleFormSubmit = () => handleSubmit(formData);

  return (
    <PageSection>
      <AddCandidatesSection
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleFormSubmit}></AddCandidatesSection>
    </PageSection>
  );
};

export default AddPage;
