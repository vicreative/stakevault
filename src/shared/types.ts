import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  Landing: undefined;
  Register: undefined;
  Login: undefined;
};

export type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;
export type LandingScreenProps = NativeStackScreenProps<RootStackParamList, 'Landing'>;
export type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, 'Register'>;

export type WelcomeScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
export type LandingScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, 'Landing'>;
export type RegisterScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Register'
>;
export type LoginScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;
