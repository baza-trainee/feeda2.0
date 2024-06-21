import React from 'react';
import {
  Section,
  SectionWrapper,
  Title,
  Select,
} from './SelectOptions.styled';

const SelectOptions = ({ title, placeholder }) => {
  return (
    <Section>
      <SectionWrapper>
        {!!title && <Title htmlFor={title}>{title}</Title>}
        <Select title={title} placeholder={placeholder}>
          <option value="passed">Пройшов</option>
          <option value="failed">Не пройшов</option>
        </Select>
      </SectionWrapper>
    </Section>
  );
};

export default SelectOptions;
