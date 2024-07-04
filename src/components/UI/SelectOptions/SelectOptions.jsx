import React from 'react';
import {
  Section,
  SectionWrapper,
  Title,
  Select,
} from './SelectOptions.styled';
import { handleOnChange } from '../../../handlers/handlers';

const SelectOptions = ({
  title,
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
      <SectionWrapper>
        {!!title && <Title htmlFor={title}>{title}</Title>}
        <Select
          title={title}
          placeholder={placeholder}
          value={value}
          onChange={handleFieldChange}>
          <option value="passed">Пройшов</option>
          <option value="failed">Не пройшов</option>
        </Select>
      </SectionWrapper>
    </Section>
  );
};

export default SelectOptions;
