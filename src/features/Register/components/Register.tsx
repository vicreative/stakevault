import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  IconButton,
  Button,
  Headline as Title,
  Subheading as SubText,
  Text as Error,
  TextInput,
} from 'react-native-paper';
import { en } from 'shared/i18n';
import theme from 'shared/config/theme/default';
import { Formik } from 'formik';
import RegistrationSchema from './schema';
import { RegisterScreenNavigationProps } from 'shared/types';
import { isNumeric } from 'shared/utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.accent,
    width: '100%',
    height: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
  },

  close: {
    marginBottom: 20,
    justifyContent: 'center',
  },
  title: {
    paddingTop: 60,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 34,
    lineHeight: 36,
    fontFamily: 'Montserrat_700Bold',
  },
  subText: {
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 12,
  },
  TextInput: {
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 32,
    backgroundColor: theme.colors.accent,
    textDecorationLine: 'none',
  },
  error: {
    paddingLeft: 30,
    fontSize: 12,
    color: theme.colors.error,
  },
  signup: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 32,
  },
  loginLink: {
    marginTop: 12,
  },
});

interface FormValues {
  email: string;
  username: string;
  password: string;
}

function Register() {
  const [isSecureEntry, setisSecureEntry] = React.useState(true);
  const initialFormValues: FormValues = { email: '', username: '', password: '' };
  const navigation = useNavigation<RegisterScreenNavigationProps>();

  const goToWelcome = () => navigation.push('Welcome');
  const goBack = () => navigation.goBack();

  const onSubmit = (values: FormValues) => {
    setTimeout(() => {
      goToWelcome();
    }, 3000);
  };

  return (
    <Formik
      validationSchema={RegistrationSchema}
      initialValues={initialFormValues}
      onSubmit={onSubmit}
    >
      {({ values, touched, errors, handleBlur, handleChange, isSubmitting, handleSubmit }) => (
        <View style={styles.container}>
          <IconButton
            icon="close"
            style={styles.close}
            size={30}
            accessibilityLabel={en.register.close}
            onPress={goBack}
          />
          <Title style={styles.title}>{en.register.title}</Title>
          <SubText style={styles.subText}>{en.register.subText}</SubText>
          <TextInput
            label={en.register.email}
            accessibilityLabel={en.register.email}
            style={styles.TextInput}
            autoCompleteType="email"
            mode="outlined"
            onBlur={handleBlur('email')}
            onChangeText={(event) => {
              handleChange('email')(event);
              // Route changes to the appropriate validator.
              handleChange('isEmail')(isNumeric(values.email) ? '0' : '1');
            }}
            placeholder="john@example.com"
            keyboardType="email-address"
            value={values.email}
            error={Boolean(touched.email && errors.email)}
            right={
              <TextInput.Icon
                color={theme.colors.error}
                name={errors.email ? 'alert-circle-outline' : ''}
              />
            }
            theme={{
              colors: { placeholder: theme.colors.primary },
            }}
          />
          {errors.email && <Error style={styles.error}>{errors.email}</Error>}
          <TextInput
            label={en.register.username}
            accessibilityLabel={en.register.username}
            style={styles.TextInput}
            mode="outlined"
            autoCompleteType="username"
            placeholder="johnny"
            value={values.username}
            onChangeText={handleChange('username')}
            error={Boolean(touched.username && errors.username)}
            right={
              <TextInput.Icon
                color={theme.colors.error}
                name={errors.email ? 'alert-circle-outline' : ''}
              />
            }
            theme={{
              colors: { placeholder: theme.colors.primary },
            }}
          />
          {errors.username && <Error style={styles.error}>{errors.username}</Error>}
          <TextInput
            style={styles.TextInput}
            mode="outlined"
            label={en.register.password}
            accessibilityLabel={en.register.password}
            secureTextEntry={isSecureEntry}
            autoCompleteType="password"
            placeholder="Enter password"
            onChangeText={handleChange('password')}
            value={values.password}
            error={Boolean(touched.password && errors.password)}
            right={
              <TextInput.Icon
                onPress={() => {
                  setisSecureEntry((prev) => !prev);
                }}
                color={errors.password ? theme.colors.error : theme.colors.primary}
                name={isSecureEntry ? 'eye-off' : 'eye'}
              />
            }
            theme={{
              colors: { placeholder: theme.colors.primary },
            }}
          />
          {errors.password && <Error style={styles.error}>{errors.password}</Error>}
          <Button
            style={styles.signup}
            onPress={handleSubmit}
            loading={isSubmitting}
            mode="contained"
          >
            {en.register.signup}
          </Button>
          <Button onPress={goToWelcome} style={styles.loginLink}>
            {en.register.loginLink}
          </Button>
        </View>
      )}
    </Formik>
  );
}

export default Register;
