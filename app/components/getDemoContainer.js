import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const GetDemoContainer = () => {
  const subTitleDemo = (theme) => ({
    maxWidth: "600px",
    mx: "auto",
    mt: "35px",
    fontSize: "16px",
    fontWeight: 500,
    textAlign: "center",
    color: "#ffffff",
    opacity: 0.6,
    [theme.breakpoints.down("xs")]: {
      mt: "20px",
    },
  });

  const getContactButton = (theme) => ({
    background: "#000",
    color: "#ffffff",
    border: "1px solid #000",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
      background: "#ffffff",
      transition: ".3s linear",
    },
    borderRadius: "40px",
    padding: "10px 16px",
    maxWidth: "140px",
    margin: "auto",
    marginTop: "44px",
    fontSize: "16px",
    fontWeight: 500,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      marginTop: "20px",
    },
  });

  const router = useRouter();

  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #1B88F4 0%, #CF374D 100%)",
        borderRadius: "24px",
      }}
    >
      <Box
        sx={{
          backgroundImage: {
            md: 'url("/images/rougechat/demo/left-bg.png"), url("/images/rougechat/demo/right-bg.png")',
          },
          backgroundSize: "contain, contain",
          backgroundPosition: "right center, left center",
          backgroundRepeat: "no-repeat, no-repeat",
          p: "44px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "28px", md: "36px" },
            fontWeight: 600,
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          Turning Data Into Action
        </Typography>
        <Typography variant="body1" sx={subTitleDemo}>
          Effortlessly unlock the full potential of your data. Just ask, and
          Rougechat DB delivers the insights you need.
        </Typography>
        <Typography
          variant="body1"
          onClick={() => router.push("/get-demo")}
          sx={getContactButton}
        >
          Get a Demo
        </Typography>
      </Box>
    </Box>
  );
};

export default GetDemoContainer;
