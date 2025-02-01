import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

const ArrowIconButton = ({ label, styles, type }) => {
  return (
    <Button
      variant="contained"
      disableRipple
      sx={{
        p: `11px ${type === "pink" ? "44px" : "30px"} 11px ${
          type === "pink" ? "44px" : "30px"
        }`,
        borderRadius: "16px",
        border: "none",
        textTransform: "inherit",
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "23px",
        boxShadow: "none",
        backgroundColor:
          type === "pink"
            ? "#FFC9CC"
            : type === "black"
            ? "#2D302F"
            : "#ffffff",
        color: type === "black" ? "#ffffff" : "#000000",
        "&:hover": {
          backgroundColor:
            type === "pink"
              ? "#FFC9CC"
              : type === "black"
              ? "#2D302F"
              : "#ffffff",
          boxShadow: "none",
          opacity: 0.8,
        },
        ...styles,
      }}
    >
      {label} <ArrowOutwardRoundedIcon sx={{ ml: label ? 1.2 : 0 }} />
    </Button>
  );
};

export default ArrowIconButton;
