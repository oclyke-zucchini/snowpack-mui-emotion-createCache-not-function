import {
  createTheme,
  ThemeProvider,
  styled
} from '@mui/material/styles';

import {
  orange,
} from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

// https://mui.com/material-ui/customization/theming
export const theme = createTheme({
  status: {
    danger: orange[500],
  },
});
