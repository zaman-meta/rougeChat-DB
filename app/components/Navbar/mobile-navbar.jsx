"use client";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "../../assets/logo.png";

const MobileNavbar = ({ isMenuOpen, setIsMenuOpen, navbarData }) => {
  const pathname = usePathname();
  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Box
          sx={{
            overflowY: "auto",
            zIndex: 1000,
            minHeight: "100vh",
            height: "100%",
            position: "fixed",
            width: "250px",
            bgcolor: "#FFF",
            maxWidth: "250px ",
            right: isMenuOpen ? 0 : " -100% ",
            transitionDuration: "500ms",
            transitionTimingFunction: "cubic - bezier(0.4, 0, 1, 1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            gap: "20px",
          }}
        >
          <Box>
            <Box
              sx={{ color: "#000", ml: "46px", cursor: "pointer" }}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <svg style={{ width: "24px" }} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                />
              </svg>
            </Box>

            <ul style={{ marginTop: "35px" }}>
              {navbarData?.navbarList?.map((lt, index) => (
                <li style={{ marginTop: "15px" }} key={index}>
                  <Link
                    href={lt.link}
                    aria-label={lt.title}
                    title={lt.title}
                    style={{
                      color: pathname === lt?.link ? "#000" : "#000",
                      opacity: pathname === lt?.link ? 1 : 0.7,
                      fontSize: "20px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      fontStyle: "normal",
                      fontWeight: pathname === lt?.link ? 700 : 200,
                      lineHeight: "normal",
                      transitionDuration: "200ms",
                      fontFamily: "Rubik, sans-serif",
                      transitionTimingFunction: "cubic-bezier(0.4,0,1,1)",
                      textTransform: "capitalize",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      marginLeft: "46px",
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{lt.title}</span>
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: "15px" }} key={index}>
                  <Link
                    href={'/contact-us'}
                    aria-label={'contact-us'}
                    title={'contact-us'}
                    style={{
                      color: pathname === '/contact-us' ? "#000" : "#000",
                      opacity: pathname === lt?.link ? 1 : 0.7,
                      fontSize: "20px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      fontStyle: "normal",
                      fontWeight: pathname === '/contact-us' ? 700 : 200,
                      lineHeight: "normal",
                      transitionDuration: "200ms",
                      fontFamily: "Rubik, sans-serif",
                      transitionTimingFunction: "cubic-bezier(0.4,0,1,1)",
                      textTransform: "capitalize",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      marginLeft: "46px",
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Contact Us</span>
                  </Link>
                </li>
            </ul>
          </Box>

          <Box
            sx={{
              mx: "auto",
              width: { xs: "184px", md: "184px", lg: "184px", xl: "184px" },
              height: { xs: "38px", md: "38px", lg: "38px", xl: "38px" },
            }}
          >
            <Image
              src={logo}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
              }}
              alt="dv"
              width={300}
              height={22}
              priority
            />
          </Box>
        </Box>
      </Box>

      {/* BG OVERLAY */}
      <Box
        sx={{
          display: { xs: "block", lg: "none" },
          position: "fixed",
          transitionDuration: "500ms",
          transitionTimingFunction: "cubic-bezier(0.4,0,1,1)",
          bgcolor: "#0000009f",
          opacity: 0.8,
          height: "100%",
          width: "100%",
          right: isMenuOpen ? 0 : "-100%",
          zIndex: 900,
        }}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default MobileNavbar;
