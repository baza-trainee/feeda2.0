const handleChange =
  (setFormData, formData) => (field) => (value) => {
    setFormData({ ...formData, [field]: value });
  };

export default handleChange;
