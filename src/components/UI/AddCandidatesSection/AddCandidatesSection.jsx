import React from 'react';
import {
  AddCandidatesFormSection,
  Form,
  ButtonSection,
} from './AddCandidatesSection.styled';
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
          title="Введіть імʼя кандидата"
          id="name"
          name="Імʼя"
          placeholder="Імʼя"
          value={formData.firstName}
          onChange={handleFieldChange('firstName')}
        />
        <TextInput
          title="Введіть прізвище кандидата"
          id="surname"
          name="Прізвище"
          placeholder="Прізвище"
          value={formData.secondName}
          onChange={handleFieldChange('secondName')}
        />
        <TextInput
          title="Введіть спеціалізацію (стек) кандидата"
          id="stack"
          name="Спеціалізація (стек)"
          placeholder="Спеціалізація (стек)"
          value={formData.specialization}
          onChange={handleFieldChange('specialization')}
        />
        <TextInput
          title="Введіть аккаунт в лінкедін кандидата"
          id="linkedin"
          name="Аккаунт в лінкедін"
          placeholder="Аккаунт в лінкедін"
          value={formData.linkedin}
          onChange={handleFieldChange('linkedin')}
        />
        <EmailInput
          title="Введіть електронну пошту кандидата"
          id="EmailInput"
          name="Електронна пошта"
          placeholder="Електронна пошта"
          value={formData.email}
          onChange={handleFieldChange('email')}
        />
        <PhoneInput
          title="Введіть телефон кандитата"
          name="Телефон"
          id="phoneInput"
          placeholder="+380*********"
          value={formData.phone}
          onChange={handleFieldChange('phone')}
        />
        <TextInput
          title="Введіть місто (країну) кандидата"
          id="city"
          name="Місто (країна)"
          placeholder="Місто"
          value={formData.city}
          onChange={handleFieldChange('city')}
        />
        <SelectOptions
          title="Оберіть статус кандидата"
          id="selectStatus"
          name="Статус"
          placeholder={'Пройшов/Не пройшов'}
          value={formData.status}
          onChange={handleFieldChange('status')}
        />
        <DateInput
          title="Оберіть дату співбесіди"
          id="InterwiewDateInput"
          name="Дата співбесіди"
          value={formData.interwiewDate}
          onChange={handleFieldChange('interwiewDate')}
        />
        <DateInput
          title="Оберіть дату відправлення листа"
          id="ListDateInput"
          name="Дата відправлення листа"
          value={formData.listDate}
          onChange={handleFieldChange('listDate')}
        />
      </Form>
      <ButtonSection>
        <PrimaryButton
          disabled={false}
          clickFunc={onSubmit}
          title="Кнопка, що реєструє кандидата">
          <span>Зареєструвати кандидата</span>
        </PrimaryButton>
      </ButtonSection>
    </AddCandidatesFormSection>
  );
};

export default AddCandidatesSection;
