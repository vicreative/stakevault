import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Logo } from 'shared/components';

const styles = StyleSheet.create({
  header: {
    height: '12%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    opacity: 0,
  },
});

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Stakevault</Text>
      <Logo />
      <Button
        icon="chevron-right"
        contentStyle={{ flexDirection: 'row-reverse' }}
        onPress={() => {}}
        accessibilityLabel="Skip"
        mode="outlined"
      >
        Skip
      </Button>
    </View>
  );
}

export default Header;
