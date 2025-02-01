"use client";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";

const PrimaryButton = ({ label, styles }) => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      disableRipple
      color="primary"
      sx={{
        p: "16px 32px 16px 32px",
        borderRadius: "8px",
        border: "none",
        textTransform: "inherit",
        fontSize: "16px",
        fontWeight: 700,
        lineHeight: "18.96px",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          boxShadow: "none",
        },
        ...styles,
      }}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
