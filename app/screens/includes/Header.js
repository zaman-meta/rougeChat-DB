"use client";
import React, { useState } from "react";
import {
  AppBar,
  Box,
  List,
  ListItemButton,
  SwipeableDrawer,
  Toolbar,
  Typography,
  IconButton,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { rougechatLogo } from "@/assets/images";
import Image from "next/image";
import { CustomButton, CustomWrapper } from "@/app/components";
import { useRouter } from "next/navigation"; // Import useRouter from next/router, not Router and Link
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";

const Header = () => {
  // const router = useRouter();
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState(open);
  };
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1000;

  const getDemoButton = (theme) => ({
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
    fontSize: "16px",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  });

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#F0FBFF",
        boxShadow: "inherit",
        height: "100px",
        justifyContent: "center",
        // pt: "24px",
        // pb: "24px",
      }}
    >
      <CustomWrapper>
        <Toolbar
          variant="dense"
          sx={{
            border: "1px solid #D5E2ED",
            borderRadius: "80px",
            justifyContent: "space-between",
            px: "12px",
          }}
        >
          <Typography variant="h6" component="div">
            <Link href="/">
              <Image
                src={rougechatLogo}
                alt="rougechat"
                style={{ width: "170px" }}
              />
            </Link>
          </Typography>
          {isMobile ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{}}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ color: "#000" }} />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <List style={{ display: "flex" }}>
                <ListItemButton
                  sx={{
                    mr: 2,
                    padding: "10px",
                    color: pathname == "/" ? "#000" : "#595959",
                    fontWeight: pathname == "/" ? "600" : "400",
                  }}
                  onClick={() => router.push("/")}
                >
                  Home
                </ListItemButton>
                <ListItemButton
                  sx={{
                    mr: 2,
                    padding: "10px",
                    color: pathname == "/about" ? "#000" : "#595959",
                    fontWeight: pathname == "/about-us" ? "600" : "400",
                  }}
                  onClick={() => router.push("/about")}
                >
                  About
                </ListItemButton>
                <ListItemButton
                  sx={{
                    mr: 2,
                    padding: "10px",
                    textTransform: "capitalise",
                    color: pathname == "/solutions" ? "#000" : "#595959",
                    fontWeight: pathname == "/solutions" ? "600" : "400",
                  }}
                  onClick={() => router.push("/solutions")}
                >
                  Solutions
                </ListItemButton>
                <ListItemButton
                  sx={{
                    mr: 2,
                    padding: "10px",
                    textTransform: "capitalise",
                    color: pathname == "/pricing" ? "#000" : "#595959",
                    fontWeight: pathname == "/pricing" ? "600" : "400",
                  }}
                  onClick={() => router.push("/pricing")}
                >
                  Pricing
                </ListItemButton>
              </List>
              <ListItem
                sx={{ width: "inherit", padding: "0px" }}
                onClick={() => router.push("/contact-us")}
              >
                <Box sx={getDemoButton}>Contact us</Box>
              </ListItem>
            </Box>
          )}
          <SwipeableDrawer
            anchor="right"
            open={drawerState}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            sx={{
              width: "100%", // Set the width to '100%' for full width
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: "100%", // Set the width of the drawer content to '100%'
                boxSizing: "border-box",
              },
            }}
          >
            <Box
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
              sx={{ width: "100%", height: "100%" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingRight: "10px",
                  paddingTop: "10px",
                }}
              >
                <CloseIcon sx={{ color: "#000" }} />
              </Box>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ListItemButton
                    onClick={() => router.push("/")}
                    sx={{
                      color: pathname == "/" ? "#DD3039" : "#595959",
                      fontSize: "32px",
                      fontFamily: "poppins",
                      fontWeight: pathname == "/" ? "600" : "400",
                    }}
                  >
                    Home
                  </ListItemButton>
                  <ListItemButton
                    onClick={() => router.push("/about-us")}
                    sx={{
                      color: pathname == "/about-us" ? "#DD3039" : "#595959",
                      fontSize: "32px",
                      fontFamily: "poppins",
                      fontWeight: pathname == "/about-us" ? "600" : "400",
                    }}
                  >
                    About
                  </ListItemButton>
                  <ListItemButton
                    onClick={() => router.push("/solutions")}
                    sx={{
                      color: pathname == "/solutions" ? "#DD3039" : "#595959",
                      fontSize: "32px",
                      fontFamily: "poppins",
                      fontWeight: pathname == "/solutions" ? "600" : "400",
                    }}
                  >
                    Solutions
                  </ListItemButton>
                  <ListItemButton
                    onClick={() => router.push("/pricing")}
                    sx={{
                      color: pathname == "/pricing" ? "#DD3039" : "#595959",
                      fontSize: "32px",
                      fontFamily: "poppins",
                      fontWeight: pathname == "/pricing" ? "600" : "400",
                    }}
                  >
                    Pricing
                  </ListItemButton>
                  <ListItemButton
                    onClick={() => router.push("/contact-us")}
                    sx={{
                      color: pathname == "/contact-us" ? "#DD3039" : "#595959",
                      fontSize: "32px",
                      fontFamily: "poppins",
                      fontWeight: pathname == "/contact-us" ? "600" : "400",
                    }}
                  >
                    Contact us
                  </ListItemButton>
                </List>
              </Box>
            </Box>
          </SwipeableDrawer>
        </Toolbar>
      </CustomWrapper>
    </AppBar>
  );
};

export default Header;
