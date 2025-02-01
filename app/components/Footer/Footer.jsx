"use client";
import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import theme from "@/app/theme/theme";
import Image from "next/image";
import logo from "../../assets/images/rougechat_logo_footer.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: "#1D1D1D",
        color: theme.palette.textColor.main,
        pt: "75px",
        pb: "68px",
        fontFamily: "Urbanist, sans-serif",
      }}
    >
      <Box className="container">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} md={6}>
            <Box sx={{ width: "226px" }} variant="h6" gutterBottom>
              <Image
                src={logo}
                alt="Logo"
                width={147}
                height={30}
                style={{ width: "100%", height: "100%", objectFit: "content" }}
              />
            </Box>
            <Typography
              variant="body1"
              sx={{ mt: "23px", fontSize: "16px", color: "#FFFFFF99" }}
            >
              Rougechat DB empowers non-technical users to extract insights from
              complex databases using natural language. By training on
              real-world examples, our Al-powered solution helps you translate
              your natural language questions into precise SQL queries.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: "28px",
                fontFamily: "Urbanist, sans-serif",
                fontWeight: "700",
              }}
            >
              Links
            </Typography>
            <Box sx={{ mt: "23px" }}>
              <Box mb={{ xs: "10px", sm: "15px" }}>
                <Link
                  href="/"
                  color="inherit"
                  underline="none"
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontSize: "16px",
                    color: "#FFFFFF99",
                  }}
                >
                  Home
                </Link>
              </Box>
              <Box mb={{ cursor: "no-drop", xs: "10px", sm: "15px" }}>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontSize: "16px",
                    color: "#FFFFFF99",
                  }}
                >
                  About
                </Link>
              </Box>
              <Box mb={{ xs: "10px", sm: "15px" }}>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontSize: "16px",
                    color: "#FFFFFF99",
                  }}
                >
                  Solutions
                </Link>
              </Box>
              <Box mb={{ cursor: "no-drop", xs: "10px", sm: "15px" }}>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontSize: "16px",
                    color: "#FFFFFF99",
                  }}
                >
                  Pricing
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            sm={4}
            sx={{ display: { xs: "none", sm: "block", md: "none" } }}
          />
          <Grid item xs={12} sm={4} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: "28px",
                fontFamily: "Urbanist, sans-serif",
                fontWeight: "700",
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ mt: "23px" }}>
              <Typography
                sx={{
                  fontFamily: "Urbanist, sans-serif",
                  fontSize: "16px",
                  lineHeight: "16.8px",
                  display: "flex",
                  alignItems: "center",
                  mb: { xs: "10px", sm: 2 },
                  color: "#FFFFFF99",
                }}
              >
                <PhoneIcon sx={{ mr: "13px", color: "#0F8EFF" }} />
                <span> +61 (0)435785822</span>
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Urbanist, sans-serif",
                  fontSize: "16px",
                  lineHeight: "16.8px",
                  display: "flex",
                  alignItems: "center",
                  mb: { xs: "10px", sm: 2 },
                  color: "#FFFFFF99",
                }}
              >
                <WhatsAppIcon sx={{ mr: "13px", color: "#0F8EFF" }} />
                <span> +61 (0)435785822</span>
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Urbanist, sans-serif",
                  fontSize: "16px",
                  lineHeight: "16.8px",
                  display: "flex",
                  alignItems: "center",
                  color: "#FFFFFF99",
                }}
              >
                <EmailIcon sx={{ mr: "13px", color: "#0F8EFF" }} />
                <span> info@metarouge.com</span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box className="copyright-line" mt={4}>
          <Typography
            variant="body1"
            sx={{ fontSize: "14px", fontWeight: "500", color: "#676666" }}
          >
            Copyright © Metarouge {currentYear}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
