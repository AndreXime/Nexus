"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#F28C28",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#303030",
    },
  },
  typography: {
    fontFamily: "open-sans, sans-serif",

    h1: {
      fontSize: "2.50rem",
      fontWeight: 400,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 400,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "2.0rem",
      fontWeight: 400,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: "1.50rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: "1rem", // Tamanho normal do texto
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem", // Texto menor
      fontWeight: 400,
      lineHeight: 1.6,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.75,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 2,
    },
  },
});

export default theme;
