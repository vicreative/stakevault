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
import LoginSchema from './schema';
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
  password: string;
}

function Login() {
  const [isSecureEntry, setisSecureEntry] = React.useState(true);
  const initialFormValues: FormValues = { email: '', password: '' };
  const navigation = useNavigation<RegisterScreenNavigationProps>();

  const goToWelcome = () => navigation.push('Welcome');
  const goToRegister = () => navigation.push('Register');
  const goBack = () => navigation.goBack();

  const onSubmit = (values: FormValues) => {
    setTimeout(() => {
      goToWelcome();
    }, 3000);
  };

  return (
    <Formik validationSchema={LoginSchema} initialValues={initialFormValues} onSubmit={onSubmit}>
      {({ values, touched, errors, handleBlur, handleChange, isSubmitting, handleSubmit }) => (
        <View style={styles.container}>
          <IconButton
            icon="close"
            style={styles.close}
            size={30}
            accessibilityLabel={en.login.close}
            onPress={goBack}
          />
          <Title testID={en.login.title} style={styles.title}>
            {en.login.title}
          </Title>
          <SubText style={styles.subText}>{en.login.subText}</SubText>
          <TextInput
            label={en.login.email}
            accessibilityLabel={en.login.email}
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
          {errors.email ? <Error style={styles.error}>{errors.email}</Error> : null}
          <TextInput
            style={styles.TextInput}
            mode="outlined"
            label={en.login.password}
            accessibilityLabel={en.login.password}
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
          {errors.password ? <Error style={styles.error}>{errors.password}</Error> : null}
          <Button
            style={styles.signup}
            onPress={handleSubmit}
            loading={isSubmitting}
            mode="contained"
            accessibilityLabel={en.login.signin}
          >
            {en.login.signin}
          </Button>
          <Button onPress={goToRegister} style={styles.loginLink}>
            {en.login.registerLink}
          </Button>
          <Button onPress={goToWelcome} style={styles.loginLink}>
            {en.login.forgotPassword}
          </Button>
        </View>
      )}
    </Formik>
  );
}

export default Login;
