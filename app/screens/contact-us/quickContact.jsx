import { Box, Typography } from "@mui/material";
import { CustomWrapper } from "../../components";
import Image from "next/image";
import { GetDemoContainer } from "@/app/components";

const fakeData = [
  {
    image_url: "/images/icon/phone.png",
    title: "Call us",
    content: "+61 (0)435785822",
    href: "tel:+61(0)435785822",
  },
  {
    image_url: "/images/icon/whatsapp.png",
    title: "Whatsapp",
    content: "+61 (0)435785822",
    href: "https://api.whatsapp.com/send?phone=+61435785822",
  },
  {
    image_url: "/images/icon/mail.png",
    title: "Mail to",
    content: "info@metarouge.com",
    href: "mailto:info@metarouge.com.au",
  },
];

const QuickContact = () => {
  const BoxStyle = (theme) => ({
    maxWidth: "809px",
    textAlign: "center",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  });

  const Heading = (theme) => ({
    fontFamily: "Be Vietnam Pro, sans-serif",
    fontWeight: 700,
    background: "linear-gradient(90deg, #E22E3C 0%, #0E90FD 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: "53.13px",
    fontSize: "42px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      lineHeight: "1.8rem",
    },
  });

  const SubHeading = (theme) => ({
    fontFamily: "Be Vietnam Pro, sans-serif",
    fontWeight: 500,
    maxWidth: "460px",
    margin: "right",
    marginBottom: "20px",
    marginTop: "22px",
    fontSize: "16px",
    fontWight: 400,
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      fontSize: "16px",
      my: "40px",
      textAlign: "center",
    },
  });

  const coverStyle = (theme) => ({
    backgroundColor: "#FFFFFFAB",
    py: "90px",
    [theme.breakpoints.down("lg")]: {
      paddingY: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingY: "30px",
    },
  });

  const CardBoxStyle = (theme) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "29px",
    mt: "48px",
    [theme.breakpoints.down("lg")]: {
      mt: "40px",
    },
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
    },
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
    },
  });

  const GetDemoRapper = (theme) => ({
    backgroundColor: "#F0FBFF",
    py: "120px",
    [theme.breakpoints.down("lg")]: {
      paddingY: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingY: "40px",
    },
  });

  return (
    <Box>
      <Box sx={coverStyle}>
        <CustomWrapper>
          <Box
            sx={{
              padding: "0px 0px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={BoxStyle}>
              <Typography variant="h2" sx={Heading}>
                Quick Connect
              </Typography>
              <Typography variant="body1" sx={SubHeading}>
                Let's connect and collaborate.
              </Typography>
            </Box>
            <Box sx={CardBoxStyle}>
              {fakeData.map((item, i) => (
                <Box
                  sx={{
                    bgcolor: "#ffffff",
                    borderRadius: "24px",
                    px: "20px",
                    display: "flex",
                    gap: "17px",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      padding: "25px",
                      borderRadius: "50%",
                      background: "#7D7D7D0D",
                      width: "90px",
                      height: "90px",
                    }}
                  >
                    <Image
                      src={item?.image_url}
                      width="199"
                      height="177"
                      quality="100"
                      style={{
                        width: "39px",
                        height: "39px",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        fontWight: 400,
                        textAlign: "left",
                        color: "#4D4D4D",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      component="a"
                      href={`${item?.href}`}
                      sx={{
                        fontSize: "18px",
                        fontWeight: 400,
                        textAlign: "left",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {item.content}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </CustomWrapper>
      </Box>
      <Box sx={GetDemoRapper}>
        <CustomWrapper>
          <GetDemoContainer />
        </CustomWrapper>
      </Box>
    </Box>
  );
};

export default QuickContact;
