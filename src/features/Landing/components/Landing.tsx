import * as React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Text, Headline as Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'shared/components';
import { en } from 'shared/i18n';
import theme from 'shared/config/theme/default';
import { Header } from 'shared/components';
import { LandingScreenNavigationProps } from 'shared/types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.accent,
    width: '100%',
    height: '100%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  hero: {
    backgroundColor: theme.colors.primary,
    height: '16%',
    paddingLeft: 60,
    paddingRight: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroMsg: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: theme.colors.accent,
  },
  heroMsgPrice: {
    fontFamily: 'Montserrat_700Bold',
    color: theme.colors.accent,
  },
  title: {
    fontSize: 14,
    lineHeight: 36,
    paddingLeft: 20,
    color: theme.colors.grey,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

function Landing() {
  const navigation = useNavigation<LandingScreenNavigationProps>();
  const goToLanding = () => navigation.push('Landing');

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <Button onPress={goToLanding} accessibilityLabel="Skip" mode="outlined">
          {en.landing.postSlip}
        </Button>
      </Header>
      <View style={styles.hero}>
        <Text style={styles.heroMsg}>
          {en.landing.hero}
          <Text style={styles.heroMsgPrice}>{en.landing.amount}</Text>
        </Text>
      </View>
      <Title style={styles.title}>{en.landing.title}</Title>
      <ScrollView style={styles.scrollView}></ScrollView>
    </SafeAreaView>
  );
}

export default Landing;
