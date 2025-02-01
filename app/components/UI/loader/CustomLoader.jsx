import * as React from "react";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import LoadingAnimation from "../../../assets/json/loading-animation.json";
import Lottie from "lottie-react";

export default function CustomLoader() {
  return (
    <Stack
      sx={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "auto",
      }}
      spacing={3}
    >
      <Box sx={{ width: "150px", height: "150px" }}>
        <Lottie animationData={LoadingAnimation} loop={true} />
      </Box>
    </Stack>
  );
}
