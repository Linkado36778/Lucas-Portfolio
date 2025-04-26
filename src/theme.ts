import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#e6e3e3"
    },
    secondary: {
      main: "#4f8e3e"
    },
  },

  typography: {
    fontFamily: "Segoe UI Symbol",
    fontWeightMedium: "bold",
  }
});

theme = responsiveFontSizes(theme);

export default theme;