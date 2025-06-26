import Baloo2Bold from '@assets/fonts/Baloo2-Bold.woff2';
import Baloo2ExtraBold from '@assets/fonts/Baloo2-ExtraBold.woff2';
import Baloo2Medium from '@assets/fonts/Baloo2-Medium.woff2';
import Baloo2Regular from '@assets/fonts/Baloo2-Regular.woff2';
import Baloo2SemiBold from '@assets/fonts/Baloo2-SemiBold.woff2';

import { createTheme } from '@mui/material/styles';

const baloo2Regular = {
  fontFamily: 'Baloo 2',
  src: `url(${Baloo2Regular}) format('woff2')`,
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontDisplay: 'swap',
};

const baloo2Medium = {
  fontFamily: 'Baloo 2',
  src: `url(${Baloo2Medium}) format('woff2')`,
  fontWeight: 500,
  fontStyle: 'normal',
  fontDisplay: 'swap',
};

const baloo2SemiBold = {
  fontFamily: 'Baloo 2',
  src: `url(${Baloo2SemiBold}) format('woff2')`,
  fontWeight: 600,
  fontStyle: 'normal',
  fontDisplay: 'swap',
};

const baloo2Bold = {
  fontFamily: 'Baloo 2',
  src: `url(${Baloo2Bold}) format('woff2')`,
  fontWeight: 700,
  fontStyle: 'normal',
  fontDisplay: 'swap',
};

const baloo2ExtraBold = {
  fontFamily: 'Baloo 2',
  src: `url(${Baloo2ExtraBold}) format('woff2')`,
  fontWeight: 800,
  fontStyle: 'normal',
  fontDisplay: 'swap',
};

const theme = createTheme({
  typography: {
    fontFamily: ['"Baloo 2"', 'Roboto'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [baloo2Regular, baloo2Medium, baloo2SemiBold, baloo2Bold, baloo2ExtraBold],
      },
    },
  },
});

export default theme;
