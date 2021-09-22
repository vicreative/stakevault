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

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: '#A8DADC',
    accent: '#1D3557',
  },
};

export default theme;
