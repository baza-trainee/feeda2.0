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
import { handleChange } from '../../../handlers/handlers';

const AddCandidatesSection = ({
  formData,
  setFormData,
  onSubmit,
}) => {
  const handleFieldChange = handleChange(
    setFormData,
    formData
  );
  return (
    <AddCandidatesFormSection>
      <Form>
        <TextInput
          title="Імʼя"
          placeholder="Імʼя"
          value={formData.firstName}
          onChange={handleFieldChange('firstName')}
        />
        <TextInput
          title="Прізвище"
          placeholder="Прізвище"
          value={formData.secondName}
          onChange={handleFieldChange('secondName')}
        />
        <TextInput
          title="Спеціалізація (стек)"
          placeholder="Спеціалізація (стек)"
          value={formData.specialization}
          onChange={handleFieldChange('specialization')}
        />
        <TextInput
          title="Аккаунт в лінкедін"
          placeholder="Аккаунт в лінкедін"
          value={formData.linkedin}
          onChange={handleFieldChange('linkedin')}
        />
        <EmailInput
          title="Електронна пошта"
          placeholder="Електронна пошта"
          value={formData.email}
          onChange={handleFieldChange('email')}
        />
        <PhoneInput
          title="Телефон"
          placeholder="+380*********"
          value={formData.phone}
          onChange={handleFieldChange('phone')}
        />
        <TextInput
          title="Місто (країна)"
          placeholder="Місто"
          value={formData.city}
          onChange={handleFieldChange('city')}
        />
        <SelectOptions
          title={'Статус'}
          placeholder={'Пройшов/Не пройшов'}
          value={formData.status}
          onChange={handleFieldChange('status')}
        />
        <DateInput
          title="Дата співбесіди"
          placeholder="03/02/2014"
          value={formData.interwiewDate}
          onChange={handleFieldChange('interwiewDate')}
        />
        <DateInput
          title="Дата відправлення листа"
          placeholder="06/05/2024"
          value={formData.listDate}
          onChange={handleFieldChange('listDate')}
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
