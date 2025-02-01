import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { CustomBox } from "@/app/components";
import Image from "next/image";
import { CustomWrapper } from "@/app/components";

const Insights = () => {
  const imageCover = (theme) => ({
    display: "block",
    // width: "41.66666667%",
    paddingRight: "0 !important",
    // order: "6 !important",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "none",
    },
  });
  const imageContainer = (theme) => ({
    position: "absolute",
    right: "0%",
    width: "50%",
    height: "558px",
    [theme.breakpoints.down("md")]: {
      position: "inherit",
      width: "50%",
      height: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      position: "inherit",
      width: "100%",
      height: "400px",
    },
    [theme.breakpoints.down("xs")]: {
      position: "inherit",
      width: "100%",
      height: "300px",
    },
  });

  const CoverStyle = (theme) => ({
    position: "relative",
    backgroundColor: "#F0FBFF",
    paddingY: "40px",
    [theme.breakpoints.down("xs")]: {
      paddingY: "10px",
    },
  });

  const BoxStyle = (theme) => ({
    maxWidth: "809px",
    textAlign: "center",
    margin: "0",
    [theme.breakpoints.down("lg")]: {
      width: "90%",
      mx: "auto",
    },
  });
  const Heading = (theme) => ({
    background: "linear-gradient(90deg, #E22E3C 0%, #0E90FD 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "Be Vietnam Pro, sans-serif",
    fontWeight: 700,
    lineHeight: "53.13px",
    textAlign: "left",
    fontSize: "42px",
    maxWidth: "506px",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      mx: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      lineHeight: "1.8rem",
      textAlign: "center",
    },
  });
  const SubHeading = (theme) => ({
    textAlign: "left",
    maxWidth: "440px",
    marginBottom: "20px",
    marginTop: "44px",
    fontSize: "16px",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      mx: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      textAlign: "center",
    },
  });

  const imageGrid = (theme) => ({
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  });

  const imageDiv = (theme) => ({
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
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
    marginTop: "44px",
    fontSize: "16px",
    fontWeight: 500, // Fixed typo
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      mx: "auto",
    },
  });

  return (
    <Box sx={CoverStyle}>
      <CustomWrapper bgColor={"#E3F5FE3b"}>
        <CustomBox
          variant="row"
          gap="40px"
          style={{ paddingBottom: "40px", gap: "50px" }}
        >
          <Grid container gap={"30px"}>
            <Grid xs alignItems={"center"}>
              <Box sx={{ pt: { md: "30px", lg: "60px" }, flex: "1" }}>
                <Box sx={BoxStyle}>
                  <Typography variant="h2" sx={Heading}>
                    Effortless Insights. Powerful Results.
                  </Typography>
                  <Typography variant="body1" sx={SubHeading}>
                    Rougechat DB makes data insights accessible to everyone. Our
                    AI-powered solution transforms natural language questions
                    into accurate SQL queries, empowering non-technical users to
                    extract insights from complex databases effortlessly.
                    Trained on real-world examples, Rougechat DB simplifies data
                    analysis and drives smarter decisions.
                  </Typography>
                  <Typography variant="body1" sx={getContactButton}>
                    Contact Us
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid xs sx={imageGrid}>
              <Box>
                <Box sx={imageDiv}>
                  <Image
                    src={"/images/rougechat/simplify_data_new.png"}
                    width="650"
                    height="570"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CustomBox>
      </CustomWrapper>
    </Box>
  );
};

export default Insights;
