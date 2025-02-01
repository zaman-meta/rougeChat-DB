"use client";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
import ContentNotFoundLogo from "../../../assets/json/content-notfound.json";
import { Box, Typography, createTheme } from "@mui/material";

const ContentNotFound = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    const redirectHome = () => {
      router.back();
    };

    const countdownInterval = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      clearInterval(countdownInterval);
      redirectHome();
    }, 5000);

    return () => {
      clearTimeout(timeout);
      clearInterval(countdownInterval);
    };
  }, [router]);

  const theme = createTheme({
    typography: {
      fontFamily: "poppins",
      fontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h3: {
        color: "#000",
        fontSize: "36px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "1.5",
        color: "#DD3039",
      },
      body1: {
        color: "#1D1D1D",
        fontFamily: "poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "1.5",
        span: {
          color: "#DD3039",
        },
      },
    },
  });

  return (
    <Box sx={{ backgroundColor: "#fbfbfb" }}>
      <Box
        sx={{
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            px: "16px",
          }}
        >
          <Box>
            <Lottie animationData={ContentNotFoundLogo} loop={false} />
          </Box>
          <Typography variant="h3">Page has not any content</Typography>
          <Typography variant="body1" className="text-lg mb-4">
            Redirecting to previous page in {countdown} seconds...
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentNotFound;
