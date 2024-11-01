import { createTheme } from "@mui/material";

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "rgb(87, 127, 27)",
      dark: "rgb(60, 89, 17)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#e1e1e1",
      dark: "#d1d1d1",
      contrastText: "#000",
    },
    error: {
      main: "#b51c1c",
    },
  },
  typography: {
    fontSize: 16,
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 12,
      lineHeight: "16px",
    },
    h1: {
      fontSize: 28,
      fontWeight: 700,
      marginBottom: 32,
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
      marginBottom: 24,
    },
    h3: {
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 24,
    },
  },
});

export default theme;
