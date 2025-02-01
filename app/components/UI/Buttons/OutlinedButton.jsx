"use client";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";

const OutlinedButton = ({ label }) => {
  const theme = useTheme();
  return (
    <Button
      variant="outlined"
      disableRipple
      color="primary"
      sx={{
        p: "16px 32px 16px 32px",
        borderRadius: "8px",
        border: `1px solid ${theme.palette.primary.main}`,
        textTransform: "inherit",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "18.96px",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default OutlinedButton;
