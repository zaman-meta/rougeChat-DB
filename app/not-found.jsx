"use client";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
// import { BsFillQuestionCircleFill } from "react-icons/bs";

const NotFound = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(2);

  useEffect(() => {
    const redirectHome = () => {
      router.push("/");
    };

    const countdownInterval = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      clearInterval(countdownInterval);
      redirectHome();
    }, 2000);

    return () => {
      clearTimeout(timeout);
      clearInterval(countdownInterval);
    };
  }, [router]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F5F5F5",
        color: "#003249",
        fontFamily: "urbanist, sans-serif",
      }}
    >
      <Box>
        {/* <BsFillQuestionCircleFill className='mx-auto' size={120} /> */}
        <Typography
          variant="h2"
          sx={{
            mx: "auto",
            mt: { xs: "12px", sm: "14px", md: "18px", lg: "18px", xl: "18px" },
            fontSize: {
              xs: "20px",
              sm: "24px",
              md: "28px",
              lg: "39px",
              xl: "48px",
            },
            fontWeight: 700,
            // fontFamily: 'mulish, sans-serif',
            lineHeight: {
              xs: "24.64px",
              sm: "28.13px",
              md: "34.8px",
              lg: "49.27px",
              xl: "59.13px",
            },
            color: "#003249",
            textAlign: "center",
          }}
        >
          Page Not Found
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: "13px",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: 400,
            lineHeight: { xs: "20.08px", md: "25px" },
            color: "#003249",
            textAlign: "center",
          }}
        >
          Oops! We couldn't find the page that you're looking for. <br /> Please
          check the address and try again.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: "13px",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: 400,
            lineHeight: { xs: "20.08px", md: "25px" },
            color: "#003249",
            textAlign: "center",
          }}
        >
          Error Code: 404
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: "13px",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: 400,
            lineHeight: { xs: "20.08px", md: "25px" },
            color: "#003249",
            textAlign: "center",
          }}
        >
          Redirecting to home page in {countdown} seconds...
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
