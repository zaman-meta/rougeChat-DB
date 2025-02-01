"use client";
import { Rubik, Urbanist } from "next/font/google";
import { createTheme } from "@mui/material/styles";

// Define Mulish font
export const rubik = Rubik({
  weight: ["300", "400", "700"],
  style: "normal",
  subsets: ["latin"],
  variable: "--rubik-font",
  display: "swap",
});

// Define Roboto font
export const urbanist = Urbanist({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
  variable: "--urbanist-font",
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0B7FE4",
    },
    secondary: {
      main: "#D62B34",
      lighter: "#FEF2F3",
    },
    textColor: {
      main: "#ffffff",
    },
    textColorDark: {
      main: "#000000",
    },
    secondaryTextColor: {
      main: "#2D302F",
    },
    thirdTextColor: {
      main: "#2D3231",
    },
  },
  typography: {
    fontFamily: [rubik.style.fontFamily, urbanist.style.fontFamily].join(","),
  },
});

export default theme;
