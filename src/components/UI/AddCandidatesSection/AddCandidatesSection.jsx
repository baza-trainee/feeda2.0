import React from 'react';
import {
  AddCandidatesFormSection,
  Form,
  ButtonSection,
} from './Add.CandidatesSection.styled';
import LoginInput from '../LoginInput/LoginInput';
import EmailInput from '../EmailInputUI/EmailInput';
import PhoneInput from '../PhoneInput/PhoneInput';
import ButtonUI from '../Button/PrimaryButton/ButtonUI';

const AddCandidatesSection = () => {
  return (
    <AddCandidatesFormSection>
      <Form>
        <LoginInput title="Імʼя" placeholder="Імʼя" />
        <LoginInput
          title="Прізвище"
          placeholder="Прізвище"
        />
        <LoginInput
          title="Спеціалізація (стек)"
          placeholder="Спеціалізація (стек)"
        />
        <LoginInput
          title="Аккаунт в лінкедін"
          placeholder="Аккаунт в лінкедін"
        />
        <EmailInput title="Електронна пошта" />
        <PhoneInput
          title="Телефон"
          placeholder="+380 *********"
        />
        <LoginInput
          title="Місто (країна)"
          placeholder="Місто"
        />
        <LoginInput
          title="Статус"
          placeholder="Пройшов/ Не пройшшов"
        />
        <LoginInput
          title="Дата співбесіди"
          placeholder="03/02/2014"
        />
        <LoginInput
          title="Дата відправлення листа"
          placeholder="06/05/2024"
        />
      </Form>
      <ButtonSection>
        <ButtonUI text="Зареєструвати кандидата" />
      </ButtonSection>
    </AddCandidatesFormSection>
  );
};

export default AddCandidatesSection;
