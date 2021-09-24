import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline as Title } from 'react-native-paper';
import { Button } from 'shared/components';
import { en } from 'shared/i18n';
import theme from 'shared/config/theme/default';
import WelcomeIllustration from './WelcomeIllustration';
import { WelcomeScreenProps } from 'shared/types';
import { Header } from 'shared/components';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.accent,
    width: '100%',
    height: '100%',
    paddingLeft: 16,
    paddingRight: 16,
  },
  illustrationContainer: {
    alignItems: 'center',
    height: '64%',
    paddingTop: 80,
    justifyContent: 'center',
  },
  illustrationText: {
    color: theme.colors.primary,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Montserrat_700Bold',
    paddingTop: 44,
    fontWeight: '600',
  },
  buttonContainer: {
    height: '16%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContent: {
    width: '48%',
  },
});

function Welcome({ navigation }: WelcomeScreenProps) {
  return (
    <View style={styles.container}>
      <Header onSkip={() => navigation.navigate('Landing')} />
      <View style={styles.illustrationContainer}>
        <WelcomeIllustration />
        <Title style={styles.illustrationText}>{en.welcome.welcomeText}</Title>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonContent}>
          <Button mode="contained" onPress={() => {}} accessibilityLabel={en.welcome.login}>
            {en.welcome.login}
          </Button>
        </View>
        <View style={styles.buttonContent}>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('Register')}
            accessibilityLabel={en.welcome.signup}
          >
            {en.welcome.signup}
          </Button>
        </View>
      </View>
    </View>
  );
}

export default Welcome;
