import * as React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import {
  Text,
  Headline as Title,
  BottomNavigation,
  IconButton,
  Subheading as SubText,
  Chip,
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Button, Card } from 'shared/components';
import { en } from 'shared/i18n';
import theme from 'shared/config/theme/default';
import { Header } from 'shared/components';
import { LandingScreenNavigationProps } from 'shared/types';
import Icon from 'shared/components/Icon/Icon';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.accent,
    width: '100%',
    height: '100%',
    paddingTop: 20,
  },
  home: {
    height: '100%',
    backgroundColor: theme.colors.accent,
  },
  account: {
    height: '100%',
    backgroundColor: theme.colors.accent,
  },
  close: {
    marginBottom: 20,
    justifyContent: 'center',
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
  scrollView: {},
  bookingNumber: {
    fontSize: 14,
    fontFamily: 'Montserrat_700Bold',
    lineHeight: 36,
    color: theme.colors.white,
  },
  user: {
    fontSize: 10,
    fontFamily: 'Montserrat_700Bold',
    color: theme.colors.grey,
  },
  providerName: {
    fontSize: 10,
    fontFamily: 'Montserrat_700Bold',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postedTime: {
    fontSize: 10,
    color: theme.colors.grey,
  },
  profileTitle: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 34,
    lineHeight: 36,
    fontFamily: 'Montserrat_700Bold',
  },
  subText: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 12,
  },
  bottomNav: {
    backgroundColor: theme.colors.komori,
    paddingTop: 6,
    paddingBottom: 6,
  },
  bankAccount: {
    paddingTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chip: {
    justifyContent: 'center',
  },
  active: {
    backgroundColor: theme.colors.midnight,
    borderColor: theme.colors.komori,
    borderRadius: 20,
  },
  inActive: {
    backgroundColor: theme.colors.accent,
    color: theme.colors.primary,
    borderColor: theme.colors.primary,
    borderRadius: 20,
  },
  userInformation: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  userInformationTitle: {
    color: theme.colors.white,
    fontSize: 18,
    paddingBottom: 10,
    fontFamily: 'Montserrat_700Bold',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: theme.colors.grey,
    paddingBottom: 10,
  },
});

function HomeRoute() {
  const navigation = useNavigation<LandingScreenNavigationProps>();
  const goToLanding = () => navigation.push('Landing');

  const [tips, setTips] = React.useState([]);

  React.useEffect(() => {
    const getLatestTips = async () => {
      const response = await fetch(`${process.env.API_URL}/latesttips`);

      try {
        const data = await response.json();
        setTips(data.tips);
      } catch (error) {
        console.log(error);
      }
    };

    getLatestTips();
  }, []);

  return (
    <View style={styles.home}>
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
      <Title style={styles.title}>{en.landing.latestTips.title}</Title>
      <ScrollView style={styles.scrollView}>
        {tips.map((tip: any) => {
          return (
            <Card
              key={tip.id}
              icon={<Icon name={tip.slug} />}
              content={
                <>
                  <View style={styles.wrapper}>
                    <Text style={styles.providerName}>{tip.providerName}</Text>
                    <Text style={styles.postedTime}>{tip.dateAdded}</Text>
                  </View>
                  <Text style={styles.bookingNumber}>{tip.bookingNumber}</Text>
                  <Text style={styles.user}>{tip.uid}</Text>
                </>
              }
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

type Bank = {
  name: string;
  nuban: string;
  active: boolean;
};

type User = {
  id: string | number;
  username: string;
  email: string;
  bank: Bank[];
};

function AccountRoute() {
  const navigation = useNavigation<LandingScreenNavigationProps>();

  const goBack = () => navigation.goBack();

  const [user, setUser] = React.useState<User>();

  React.useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`${process.env.API_URL}/users`);

      try {
        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  return (
    <View style={styles.account}>
      <IconButton
        icon="close"
        style={styles.close}
        size={30}
        accessibilityLabel={en.profile.close}
        onPress={goBack}
      />
      <Title testID={en.profile.title} style={styles.profileTitle}>
        {en.profile.title}
      </Title>
      <SubText style={styles.subText}>{en.profile.subText}</SubText>
      <View style={styles.bankAccount}>
        <Title style={styles.title}>{en.profile.bank.title}</Title>
        <Button mode="text" onPress={goBack}>
          {en.profile.bank.buttonText}
        </Button>
      </View>
      <View>
        {user?.bank.map((bank: Bank) => {
          return (
            <Card
              key={bank.nuban}
              icon={<Icon name="sportybet" />}
              content={
                <View style={styles.wrapper}>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.providerName}>{bank.name}</Text>
                    <Text style={styles.bookingNumber}>{bank.nuban}</Text>
                  </View>
                  <View style={styles.chip}>
                    <Chip
                      icon={bank.active ? 'check' : ''}
                      style={bank.active ? styles.active : styles.inActive}
                      onPress={() => console.log(bank.active ? 'Deactivate' : 'Activate')}
                    >
                      {bank.active ? 'Active' : 'Activate'}
                    </Chip>
                  </View>
                </View>
              }
            />
          );
        })}
      </View>
      <View style={styles.userInformation}>
        <Title style={styles.userInformationTitle}>{en.profile.userInformation.title}</Title>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{en.profile.userInformation.username}</Text>
          <Text>{user?.username}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{en.profile.userInformation.email}</Text>
          <Text>{user?.email}</Text>
        </View>
      </View>
    </View>
  );
}

function Landing() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'account', title: 'Account', icon: 'account-circle' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    account: AccountRoute,
  });

  return (
    <SafeAreaView style={styles.container}>
      <BottomNavigation
        barStyle={styles.bottomNav}
        navigationState={{ index, routes }}
        activeColor={theme.colors.primary}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaView>
  );
}

export default Landing;
