import { Container, styled } from "@mui/material";

const CustomWrapper = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    maxWidth: 1320,
  },
  [theme.breakpoints.between("lg", "xl")]: {
    maxWidth: 1140,
  },
  [theme.breakpoints.between("md", "lg")]: {
    maxWidth: 960,
  },
  [theme.breakpoints.between("sm", "md")]: {
    maxWidth: 720,
  },
  [theme.breakpoints.down("xs")]: {
    maxWidth: 540,
  },
}));

export default CustomWrapper;
