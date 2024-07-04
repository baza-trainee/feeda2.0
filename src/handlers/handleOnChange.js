const handleOnChange = (setEmpty, onChange) => (event) => {
  setEmpty(true);
  onChange(event.target.value);
};

export default handleOnChange;
