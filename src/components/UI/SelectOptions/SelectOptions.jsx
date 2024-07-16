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
      {!!title && <Title htmlFor={id}>{name}</Title>}
      <Select
        title={title}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleFieldChange}>
        <option
          value="passed"
          aria-setsize="2"
          aria-posinset="1">
          Пройшов
        </option>
        <option
          value="failed"
          aria-setsize="2"
          aria-posinset="2">
          Не пройшов
        </option>
      </Select>
    </Section>
  );
};

export default SelectOptions;
