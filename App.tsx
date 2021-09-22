import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import DefaultTheme from 'shared/config/theme/default';

export default function App() {
  return (
    <PaperProvider theme={DefaultTheme}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Button
          icon="camera"
          mode="contained"
          labelStyle={{ color: DefaultTheme.colors.accent }}
          onPress={() => console.log('Pressed')}
        >
          Press me
        </Button>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
