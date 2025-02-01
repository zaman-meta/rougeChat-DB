import { CustomWrapper } from "@/app/components";
import { rougechatLogoFooter } from "@/assets/images";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Box className="bg-dark" sx={{ paddingY: "50px" }}>
        <CustomWrapper>
          <Box className="container mt-4">
            <Box className="row justify-content-between">
              <Box className="col-lg-4 my-2">
                <a href="/">
                  <h6 className="mb-4">
                    <Image src={rougechatLogoFooter} alt="rougechatLogo" />
                  </h6>
                </a>
                <Typography
                  variant="h5"
                  className="content-footer pb-0 mb-0"
                  sx={{ color: "#fff" }}
                >
                  Rougechat DB empowers non-technical users to extract insights
                  from complex databases using natural language. By training on
                  real-world examples, our Al-powered solution helps you
                  translate your natural language questions into precise SQL
                  queries.
                </Typography>
              </Box>

              <Box className="col-md-auto my-2 text-light">
                <h6 className="mb-4 links-head">Links</h6>
                <Typography variant="h5" sx={{ paddingY: "10px" }}>
                  <Link className="links-footer" href="/">
                    Home
                  </Link>
                </Typography>
                <Typography variant="h5" sx={{ paddingY: "7px" }}>
                  <Link className="links-footer" href="/about-us">
                    About
                  </Link>
                </Typography>
                <Typography variant="h5" sx={{ paddingY: "7px" }}>
                  <Link className="links-footer" href="/solutions">
                    Solutions
                  </Link>
                </Typography>
                <Typography variant="h5" sx={{ paddingY: "7px" }}>
                  <Link className="links-footer" href="/pricing">
                    Pricing
                  </Link>
                </Typography>
              </Box>

              <Box className="col-md-4 my-2 text-light">
                <h6 className="mb-4 links-head">Contact us</h6>

                <a
                  href="tel:+61(0)435785822"
                  target="_new"
                  className="links-footer py-3 d-block"
                  style={{
                    borderBottom: "2px",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                  }}
                >
                  <i className="ri-phone-fill phone-icon pe-3" />
                  +61 (0)435785822
                </a>
                <hr className="line ms-4" />

                <a
                  href="https://api.whatsapp.com/send?phone=+61435785822"
                  target="_blank"
                  className="links-footer py-3 d-block"
                >
                  <i className="ri-whatsapp-fill phone-icon pe-3" />
                  +61 (0)435785822
                </a>
                <hr className="copyright line ms-4" />

                <a
                  href="mailto:info@metarouge.com.au"
                  target="_new"
                  className="links-footer py-3 d-block"
                >
                  <i className="ri-mail-send-line phone-icon pe-3" />
                  info@metarouge.com.au
                </a>
              </Box>
            </Box>
          </Box>
        </CustomWrapper>
      </Box>
      <Box className="bg-dark">
        <CustomWrapper>
          <section className="copyright-line bg-dark py-4">
            <Box className="container">
              <p
                className="copyright-content mb-0"
                style={{ fontFamily: "poppins" }}
              >
                Copyright © Metarouge {year}
              </p>
            </Box>
          </section>
        </CustomWrapper>
      </Box>
    </>
  );
};

export default Footer;
