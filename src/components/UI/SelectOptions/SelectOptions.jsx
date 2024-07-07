import React from 'react';
import {
  Section,
  Title,
  Select,
} from './SelectOptions.styled';
import { handleOnChange } from '../../../handlers/handlers';

const SelectOptions = ({
  title,
  id,
  name,
  placeholder,
  value,
  setEmpty,
  onChange,
}) => {
  const handleFieldChange = handleOnChange(
    setEmpty,
    onChange
  );

  return (
    <Section>
      {!!title && <Title htmlFor={id}>{title}</Title>}
      <Select
        title={title}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleFieldChange}>
        <option value="passed">Пройшов</option>
        <option value="failed">Не пройшов</option>
      </Select>
    </Section>
  );
};

export default SelectOptions;
