import React from 'react';
import {
  Section,
  SectionWrapper,
  Title,
  Select,
} from './SelectOptions.styled';

const SelectOptions = ({
  title,
  placeholder,
  value,
  onChange,
}) => {
  // looks like i can make 1 handler on all of files
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Section>
      <SectionWrapper>
        {!!title && <Title htmlFor={title}>{title}</Title>}
        <Select
          title={title}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}>
          <option value="passed">Пройшов</option>
          <option value="failed">Не пройшов</option>
        </Select>
      </SectionWrapper>
    </Section>
  );
};

export default SelectOptions;
