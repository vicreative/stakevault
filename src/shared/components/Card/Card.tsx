import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Surface } from 'react-native-paper';
import theme from 'shared/config/theme/default';

const styles = StyleSheet.create({
  cardContent: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.accent,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    height: 100,
    elevation: 14,
  },
  providerBase: {
    width: 64,
    height: 64,
    backgroundColor: theme.colors.komori,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  content: {
    justifyContent: 'center',
    marginLeft: 30,
    flexDirection: 'column',
    width: '70%',
  },
});

type CardProps = {
  icon: React.ReactElement;
  content: React.ReactElement;
};

function Card({ icon, content }: CardProps) {
  return (
    <Surface style={styles.cardContent}>
      <View style={styles.providerBase}>{icon}</View>
      <View style={styles.content}>{content}</View>
    </Surface>
  );
}

export default Card;
