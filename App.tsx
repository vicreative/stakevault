import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import theme from 'shared/config/theme/default';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import { Welcome } from 'features/Welcome';
import { Header } from 'shared/components';
import { RootStackParamList } from 'shared/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              header: ({ navigation }) => <Header onSkip={() => navigation.navigate('Landing')} />,
            }}
          >
            <RootStack.Screen name="Welcome" component={Welcome} />
            <RootStack.Screen name="Landing" component={Welcome} />
          </RootStack.Navigator>
        </NavigationContainer>

        <StatusBar style="auto" />
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
