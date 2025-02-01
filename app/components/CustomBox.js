import { Box, styled } from "@mui/material";

const CustomBox = ({ variant,style, children }) => {
  const CustomDiv = styled(Box)(({ theme }) => ({
    // Define your custom variants here
    ...style,
    row: {
      "--bs-gutter-x": "1.5rem",
      "--bs-gutter-y": "0",
      display: "flex",
      flexWrap: "wrap",
      marginTop: "calc(-1 * var(--bs-gutter-y))",
      marginRight: "calc(-.5 * var(--bs-gutter-x))",
      marginLeft: "calc(-.5 * var(--bs-gutter-x))",
      
    },
    variant2: {
      padding: "15px",
      backgroundColor: "#ff5722",
      color: "#fff",
    },
  }));
  return <CustomDiv variant={variant}>{children}</CustomDiv>;
};

export default CustomBox;
