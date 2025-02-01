"use client";
import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import theme from "@/app/theme/theme";
import Image from "next/image";
import logo from "../../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: "#d32f2f",
        color: theme.palette.textColor.main,
        pt: "75px",
        pb: "68px",
        fontFamily: "Urbanist, sans-serif",
      }}
    >
      <Box className="container">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" gutterBottom>
              <Image src={logo} alt="Logo" width={147} height={30} />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: "18px",
                mb: { xs: "16px", sm: "31px" },
                fontFamily: "Urbanist, sans-serif",
                fontWeight: "700",
              }}
            >
              Company
            </Typography>
            <Box mb={{ xs: "10px", sm: "15px" }}>
              <Link
                href="/scenes/about"
                color="inherit"
                underline="none"
                style={{ fontFamily: "Urbanist, sans-serif", fontSize: "14px" }}
              >
                About Us
              </Link>
            </Box>
            <Box mb={{ cursor: "no-drop", xs: "10px", sm: "15px" }}>
              <Link
                href="#"
                color="inherit"
                underline="none"
                style={{ fontFamily: "Urbanist, sans-serif", fontSize: "14px" }}
              >
                Features
              </Link>
            </Box>
            <Box mb={{ xs: "10px", sm: "15px" }}>
              <Link
                href="/scenes/solutions"
                color="inherit"
                underline="none"
                style={{ fontFamily: "Urbanist, sans-serif", fontSize: "14px" }}
              >
                Solutions
              </Link>
            </Box>
            <Box mb={{ cursor: "no-drop", xs: "10px", sm: "15px" }}>
              <Link
                href="#"
                color="inherit"
                underline="none"
                style={{ fontFamily: "Urbanist, sans-serif", fontSize: "14px" }}
              >
                FAQs
              </Link>
            </Box>
            <Box mb={{ cursor: "no-drop", xs: "10px", sm: "15px" }}>
              <Link
                href="#"
                color="inherit"
                underline="none"
                style={{ fontFamily: "Urbanist, sans-serif", fontSize: "14px" }}
              >
                Contact Us
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: "18px",
                mb: { xs: "16px", sm: "31px" },
                fontFamily: "Urbanist, sans-serif",
                fontWeight: "700",
              }}
            >
              Locations
            </Typography>
            <Typography
              sx={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: "14px",
                maxWidth: "145px",
                lineHeight: "16.8px",
              }}
            >
              Level 8, 7-11 York Street, Sydney NSW 2000, Australia
            </Typography>
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
                fontSize: "18px",
                mb: { xs: "16px", sm: "31px" },
                fontFamily: "Urbanist, sans-serif",
                fontWeight: "700",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              sx={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: "14px",
                lineHeight: "16.8px",
                display: "flex",
                alignItems: "center",
                mb: { xs: "10px", sm: 2 },
              }}
            >
              <PhoneIcon sx={{ mr: "13px" }} />
              <span> +61 (0)435785822</span>
            </Typography>
            <Typography
              sx={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: "14px",
                lineHeight: "16.8px",
                display: "flex",
                alignItems: "center",
                mb: { xs: "10px", sm: 2 },
              }}
            >
              <WhatsAppIcon sx={{ mr: "13px" }} />
              <span> +61 (0)435785822</span>
            </Typography>
            <Typography
              sx={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: "14px",
                lineHeight: "16.8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <EmailIcon sx={{ mr: "13px" }} />
              <span> info@metarouge.com</span>
            </Typography>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography
            variant="body2"
            sx={{ fontSize: "14px", fontWeight: "300" }}
          >
            © {currentYear} All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
