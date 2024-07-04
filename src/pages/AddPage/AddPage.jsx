import React, { useState } from 'react';
import AddCandidatesSection from '../../components/UI/AddCandidatesSection/AddCandidatesSection';
import { PageSection } from './AddPage.styled';

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

  //make 1 handle for all elements
  const handleSubmit = () => {
    console.log('Form data:', formData);
  };

  return (
    <PageSection>
      <AddCandidatesSection
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}></AddCandidatesSection>
    </PageSection>
  );
};

export default AddPage;
