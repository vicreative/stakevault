import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  Landing: undefined;
  Register: undefined;
};

export type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;
export type LandingScreenProps = NativeStackScreenProps<RootStackParamList, 'Landing'>;
export type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, 'Register'>;
