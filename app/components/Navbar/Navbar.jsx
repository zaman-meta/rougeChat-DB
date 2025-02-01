"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/rougechat_logo.png";
import PrimaryButton from "../UI/Buttons/PrimaryButton";
import OutlinedButton from "../UI/Buttons/OutlinedButton";
import { usePathname } from "next/navigation";
import { navbarData } from "@/@json-db";
import { Box, Button, List, Typography } from "@mui/material";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Box
      sx={{
        width: "100%",
        background: "#FFF",
        boxShadow: { xs: "none" },
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box
          className="container"
          sx={{
            display: "block",
            transitionDuration: "500ms",
            transitionTimingFunction: "cubic - bezier(0.4, 0, 1, 1)",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              margin: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: { xs: "28px 0px", md: "17px 0px" },
            }}
          >
            <Link
              href={navbarData?.companyName?.link}
              aria-label="Company"
              title={navbarData?.companyName?.title}
            >
              <Box
                sx={{
                  width: { xs: "184px", md: "184px", lg: "184px", xl: "184px" },
                  height: { xs: "38px", md: "38px", lg: "38px", xl: "38px" },
                }}
              >
                <Image
                  src={logo}
                  style={{
                    flexShrink: 0,
                    width: "170px", 
                    objectFit: "fill",
                  }}
                  alt="Logo"
                  quality={100}
                  width={184}
                  height={38}
                  priority
                />
              </Box>
            </Link>
            <List
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                justifyContent: "space-between",
                alignItems: "center",
                gap: { md: "15px", lg: "26px", xl: "35px" },
              }}
            >
              {navbarData?.navbarList?.map((lt, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={lt.link}
                      aria-label={lt.title}
                      title={lt.title}
                      target={lt.target ? "_blank" : ""}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { md: "16px", xl: "16px" },
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontFamily: "Rubik, sans-serif",
                          textTransform: "capitalize",
                          lineHeight: "normal",
                          color: pathname === lt?.link ? "#0B7FE4" : "#000",
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.1)",
                            color: "#0B7FE4",
                          },
                        }}
                      >
                        {lt.title}
                      </Typography>
                    </Link>
                  </li>
                );
              })}
              <Box>
                <Link href="/" passHref style={{ marginRight: "16px" }}>
                  <OutlinedButton label="Contact Us" />
                </Link>
                <Link href="/" passHref>
                  <PrimaryButton label="Book a Demo" />
                </Link>
              </Box>
            </List>

            {/* DROP DOWN BUTTON ON THE MOBILE SIZE */}
            <Box
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              <Button
                aria-label="Open Menu"
                title="Open Menu"
                sx={{ p: 0 }}
                onClick={() => setIsMenuOpen(true)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                    fill="#1991FA"
                  />
                </svg>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <MobileNavbar
        navbarData={navbarData}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </Box>
  );
};

export default Navbar;

/* 
  <AppBar
      className="container"
      position="static"
      sx={{
        boxShadow: "none",
        backgroundColor: "transparent",
        color: "#000000",
        my: "35px",
      }}
    >
      <Toolbar  >
        <Box sx={{ flexGrow: 1 }}>
          <Box component="a" sx={{ display: "flex", alignItems: "center" }}>
            <Image src={logo} alt="Logo" width={184} height={38} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexGrow: 0,
            justifyContent: "center",
            alignItems: "center",
            gap: "38px",
            fontFamily: "Rubik, sans-serif",
            zIndex: 100,
          }}
        >
          <Link href="/" passHref>
            Home
          </Link>
          <Link href="/scenes/about" passHref>
            About Us
          </Link>
          <Link href="/scenes/solutions" passHref>
            Solutions
          </Link>
          <Box>
            <Link href="/" passHref style={{ marginRight: "16px" }}>
              <OutlinedButton label="Contact Us" />
            </Link>
            <Link href="/" passHref>
              <PrimaryButton label="Book a Demo" />
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
*/
