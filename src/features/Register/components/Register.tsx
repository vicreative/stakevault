import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline as Title } from 'react-native-paper';
import { en } from 'shared/i18n';
import theme from 'shared/config/theme/default';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.accent,
    width: '100%',
    height: '100%',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    color: theme.colors.primary,
  },
});

function Register({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>{en.register.title}</Title>
    </View>
  );
}

export default Register;
