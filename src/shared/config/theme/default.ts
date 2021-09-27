import { configureFonts, DefaultTheme } from 'react-native-paper';

const fontConfig: any = {
  web: {
    regular: {
      fontFamily: 'Montserrat_400Regular',
      fontWeight: '400',
    },
    semibold: {
      fontFamily: 'Montserrat_600Semibold',
      fontWeight: '600',
    },
  },
  android: {
    regular: {
      fontFamily: 'Montserrat_400Regular',
      fontWeight: '400',
    },
    bold: {
      fontFamily: 'Montserrat_700Bold',
      fontWeight: '700',
    },
  },
};

const turquoise = '#A8DADC';
const catalinaBlue = '#1D3557';
const lightRed = '#FF5B68';
const silverSand = '#C3C3C3';
const white = '#ffffff';

const theme = {
  ...DefaultTheme,
  dark: true,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: turquoise,
    accent: catalinaBlue,
    text: turquoise,
    error: lightRed,
    white: white,
    grey: silverSand,
  },
};

export default theme;
