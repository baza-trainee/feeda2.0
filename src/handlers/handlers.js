export const handleOnChange =
  (setEmpty, onChange) => (event) => {
    setEmpty(true);
    onChange(event.target.value);
  };

export const handleChange =
  (setFormData, formData) => (field) => (value) => {
    setFormData({ ...formData, [field]: value });
  };

export const handleSubmit = (formData) => {
  console.log('Form data:', formData);
};
