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

const AddCandidatesSection = () => {
  return (
    <AddCandidatesFormSection>
      <Form>
        <TextInput title="Імʼя" placeholder="Імʼя" />
        <TextInput
          title="Прізвище"
          placeholder="Прізвище"
        />
        <TextInput
          title="Спеціалізація (стек)"
          placeholder="Спеціалізація (стек)"
        />
        <TextInput
          title="Аккаунт в лінкедін"
          placeholder="Аккаунт в лінкедін"
        />
        <EmailInput title="Електронна пошта" />
        <PhoneInput
          title="Телефон"
          placeholder="+380 *********"
        />
        <TextInput
          title="Місто (країна)"
          placeholder="Місто"
        />
        <SelectOptions
          title={'Статус'}
          placeholder={'Пройшов/Не пройшов'}
        />
        <DateInput
          title="Дата співбесіди"
          placeholder="03/02/2014"
        />
        <DateInput
          title="Дата відправлення листа"
          placeholder="06/05/2024"
        />
      </Form>
      <ButtonSection>
        <PrimaryButton
          disabled={false}
          clickFunc={() =>
            console.log('Має реєструвати кандидата')
          }>
          <span>Зареєструвати кандидата</span>
        </PrimaryButton>
      </ButtonSection>
    </AddCandidatesFormSection>
  );
};

export default AddCandidatesSection;
