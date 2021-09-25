import * as Yup from 'yup';

const RegistrationSchema = Yup.object().shape({
  email: Yup.string().when('isEmail', {
    is: '1',
    then: Yup.string()
      .label('Email')
      .email('Please enter valid email')
      .required('Please enter a registered email'),
    otherwise: Yup.string()
      .label('Mobile')
      .required('Please enter a valid phone number')
      .matches(
        /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
        'Please enter a valid phone number'
      ),
  }),
  username: Yup.string()
    .label('Username')
    .required()
    .min(2, 'Must have at least 2 characters')
    .max(20, 'Must not have more than 15 characters'),
  password: Yup.string()
    .label('Password')
    .required()
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .max(40, ({ max }) => `Password must be at least ${max} characters`),
});

export default RegistrationSchema;
