import { object, string, date } from 'yup';

export const textValidationSchema = object().shape({
  name: string()
    .required('Поле обовʼязкове для заповнення')
    .test(
      'length',
      'Поле має містити максимум 30 символів',
      (value) => (value ? value.length < 31 : true)
    ),
});

export const dateValidationSchema = object().shape({
  date: date()
    .max(
      new Date(),
      'Дата не може бути пізніше поточної дати'
    )
    .required('Поле обовʼязкове для заповнення'),
});

export const emailValidationSchema = object().shape({
  email: string()
    .email('Неправильний формат електронної пошти')
    .required(
      `Поле електронної пошти обов'язкове для заповнення`
    ),
});

export const passwordValidationSchema = object().shape({
  password: string()
    .test(
      'length',
      'Пароль має містити мінімум 8 символів',
      (value) => (value ? value.length >= 8 : true)
    )
    .test(
      'length',
      'Пароль має містити максимум 30 символів',
      (value) => (value ? value.length < 31 : true)
    )
    .required('Поле вводу паролю не може бути порожнім'),
});

const phoneRegExp =
  /^(\+?(?!7\d{9,12})\d{1,4})?[\- ]?\(?\d{1,4}\)?[\- ]?\d{1,4}[\- ]?\d{1,4}[\- ]?\d{1,4}[\- ]?\d{1,4}$/;
export const phoneValidationSchema = object().shape({
  phone: string()
    .required(
      'Поле номера телефону обовʼязкове для заповнення'
    )
    .matches(
      phoneRegExp,
      'Неправильний формат номера телефону'
    ),
});
