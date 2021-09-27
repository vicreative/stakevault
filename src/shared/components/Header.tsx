import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './Logo/Logo';
import Button from './Button/Button';
import { en } from 'shared/i18n';
import theme from 'shared/config/theme/default';

const styles = StyleSheet.create({
  headerRouter: {
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    backgroundColor: theme.colors.accent,
  },
  header: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: theme.colors.primary,
    fontSize: 24,
    opacity: 0,
  },
});

type HeaderProps = {
  children: React.ReactElement;
};

function Header({ children }: HeaderProps) {
  return (
    <View style={styles.headerRouter}>
      <View style={styles.header}>
        <Text style={styles.text}>{en.welcome.name}</Text>
        <Logo />
        {children}
      </View>
    </View>
  );
}

export default Header;
