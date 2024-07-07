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
          id="name"
          name="name"
          placeholder="Імʼя"
          value={formData.firstName}
          onChange={handleFieldChange('firstName')}
        />
        <TextInput
          title="Прізвище"
          id="surname"
          name="surname"
          placeholder="Прізвище"
          value={formData.secondName}
          onChange={handleFieldChange('secondName')}
        />
        <TextInput
          title="Спеціалізація (стек)"
          id="stack"
          name="stack"
          placeholder="Спеціалізація (стек)"
          value={formData.specialization}
          onChange={handleFieldChange('specialization')}
        />
        <TextInput
          title="Аккаунт в лінкедін"
          id="linkedin"
          name="linkedin"
          placeholder="Аккаунт в лінкедін"
          value={formData.linkedin}
          onChange={handleFieldChange('linkedin')}
        />
        <EmailInput
          title="Електронна пошта"
          id="EmailInput"
          name="EmailInput"
          placeholder="Електронна пошта"
          value={formData.email}
          onChange={handleFieldChange('email')}
        />
        <PhoneInput
          title="Телефон"
          name="PhoneInput"
          id="phoneInput"
          placeholder="+380*********"
          value={formData.phone}
          onChange={handleFieldChange('phone')}
        />
        <TextInput
          title="Місто (країна)"
          id="city"
          name="city"
          placeholder="Місто"
          value={formData.city}
          onChange={handleFieldChange('city')}
        />
        <SelectOptions
          title="Статус"
          id="selectStatus"
          name="selectStatus"
          placeholder={'Пройшов/Не пройшов'}
          value={formData.status}
          onChange={handleFieldChange('status')}
        />
        <DateInput
          title="Дата співбесіди"
          id="InterwiewDateInput"
          name="InterwiewDateInput"
          placeholder="03/02/2014"
          value={formData.interwiewDate}
          onChange={handleFieldChange('interwiewDate')}
        />
        <DateInput
          title="Дата відправлення листа"
          id="ListDateInput"
          name="ListDateInput"
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
