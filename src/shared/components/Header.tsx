import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './Logo/Logo';
import Button from './Button/Button';
import theme from 'shared/config/theme/default';

const styles = StyleSheet.create({
  headerRouter: {
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: 'center',
    backgroundColor: theme.colors.accent,
    paddingRight: 16,
    paddingLeft: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    opacity: 0,
  },
});

type HeaderProps = {
  onSkip: Function;
};

function Header({ onSkip }: HeaderProps) {
  return (
    <View style={styles.headerRouter}>
      <View style={styles.header}>
        <Text style={styles.text}>Stakevault</Text>
        <Logo />
        <Button
          icon="chevron-right"
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={onSkip}
          accessibilityLabel="Skip"
          mode="outlined"
        >
          Skip
        </Button>
      </View>
    </View>
  );
}

export default Header;
