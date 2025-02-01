"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
        background: "#F0FBFF",
        boxShadow: { xs: "none" },
      }}
    >
      <Box sx={{ py: "24px", width: "100%" }}>
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
              padding: { xs: "13px 16px" },
              border: "1px solid #D5E2ED",
              borderRadius: "80px",
              // px: "12px",
            }}
          >
            <Link
              href={navbarData?.companyName?.link}
              aria-label="Company"
              title={navbarData?.companyName?.title}
            >
              <Box
                sx={{
                  width: { xs: "154px", md: "154px", lg: "154px", xl: "154px" },
                }}
              >
                <Image
                  src={"/navbar_logo.svg"}
                  style={{
                    flexShrink: 0,
                    width: "154px",
                    objectFit: "fill",
                  }}
                  alt="Logo"
                  quality={100}
                  width={154}
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
                          fontWeight: 700,
                          fontFamily: "Be Vietnam Pro, sans-serif",
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
              <Link href="/contact-us" passHref style={{ marginRight: "16px" }}>
                <Box>
                  <Typography
                    sx={{
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
                      padding: "8px 16px",
                      maxWidth: "140px",
                      margin: "auto",
                      fontSize: "16px",
                      fontWeight: 500,
                    }}
                  >
                    Contact Us
                  </Typography>
                </Box>
              </Link>
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
