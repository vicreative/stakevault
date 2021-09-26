import * as Yup from 'yup';
import { PHONE_REGEX } from 'shared/constants';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email/Phone number should not be empty')
    .when('isEmail', {
      is: '1',
      then: Yup.string()
        .label('Email')
        .email('Please enter valid email')
        .required('Please enter a registered email'),
    })
    .when('isEmail', {
      is: '0',
      then: Yup.string()
        .label('Mobile')
        .required('Please enter a valid phone number')
        .matches(PHONE_REGEX, 'Please enter a valid phone number'),
    }),
  password: Yup.string()
    .label('Password')
    .required('Password should not be empty')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .max(256, ({ max }) => `Password must be at least ${max} characters`),
});

export default LoginSchema;
