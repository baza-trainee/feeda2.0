import React from 'react';
import {
  AddCandidatesFormSection,
  Form,
  ButtonSection,
} from './Add.CandidatesSection.styled';
import TextInput from '../TextInput/TextInput';
import EmailInput from '../EmailInputUI/EmailInput';
import PhoneInput from '../PhoneInput/PhoneInput';
import PrimaryButton from '../Button/PrimaryButton/PrimaryButton';
import DateInput from '../DateInput/DateInput';
import SelectOptions from '../SelectOptions/SelectOptions';

const AddCandidatesSection = ({
  formData,
  setFormData,
  onSubmit,
}) => {
  //make 1 handle for all elements
  const handleChange = (field) => (value) => {
    setFormData({ ...formData, [field]: value });
  };
  return (
    <AddCandidatesFormSection>
      <Form>
        <TextInput
          title="Імʼя"
          placeholder="Імʼя"
          value={formData.firstName}
          onChange={handleChange('firstName')}
        />
        <TextInput
          title="Прізвище"
          placeholder="Прізвище"
          value={formData.secondName}
          onChange={handleChange('secondName')}
        />
        <TextInput
          title="Спеціалізація (стек)"
          placeholder="Спеціалізація (стек)"
          value={formData.specialization}
          onChange={handleChange('specialization')}
        />
        <TextInput
          title="Аккаунт в лінкедін"
          placeholder="Аккаунт в лінкедін"
          value={formData.linkedin}
          onChange={handleChange('linkedin')}
        />
        <EmailInput
          title="Електронна пошта"
          placeholder="Електронна пошта"
          value={formData.email}
          onChange={handleChange('email')}
        />
        <PhoneInput
          title="Телефон"
          placeholder="+380*********"
          value={formData.phone}
          onChange={handleChange('phone')}
        />
        <TextInput
          title="Місто (країна)"
          placeholder="Місто"
          value={formData.city}
          onChange={handleChange('city')}
        />
        <SelectOptions
          title={'Статус'}
          placeholder={'Пройшов/Не пройшов'}
          value={formData.status}
          onChange={handleChange('status')}
        />
        <DateInput
          title="Дата співбесіди"
          placeholder="03/02/2014"
          value={formData.interwiewDate}
          onChange={handleChange('interwiewDate')}
        />
        <DateInput
          title="Дата відправлення листа"
          placeholder="06/05/2024"
          value={formData.listDate}
          onChange={handleChange('listDate')}
        />
      </Form>
      <ButtonSection>
        <PrimaryButton
          disabled={false}
          clickFunc={onSubmit}>
          <span>Зареєструвати кандидата</span>
        </PrimaryButton>
      </ButtonSection>
    </AddCandidatesFormSection>
  );
};

export default AddCandidatesSection;
