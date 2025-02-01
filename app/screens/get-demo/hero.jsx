import { Box, Grid, Typography } from "@mui/material";
import { CustomWrapper } from "../../components";
import GetDemoForm from "./getDemoForm";
import Image from "next/image";

const fakeData = [
  {
    image_url: "/images/rougechat/why/why-1.png",
    title: "Conversational Access",
  },
  {
    image_url: "/images/rougechat/why/why-2.png",
    title: "Effortless Insights",
  },
  {
    image_url: "/images/rougechat/why/why-3.png",
    title: "Smarter Decisions",
  },
  {
    image_url: "/images/rougechat/why/why-4.png",
    title: "Accelerated ROI",
  },
];

const GetHero = () => {
  const BoxStyle = (theme) => ({
    maxWidth: "809px",
    textAlign: "center",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  });
  const titleHeading = (theme) => ({
    background: "#FFFFFF",
    border: "1px solid #D5E2ED",
    borderRadius: "30px",
    padding: "9px 16px",
    maxWidth: "240px",
    margin: "right",
    marginBottom: "40px",
    fontSize: "14px",
    fontWight: 500,
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      margin: "auto",
      marginBottom: "32px",
    },
  });
  const Heading = (theme) => ({
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
  const FirstHeading = (theme) => ({
    background: "linear-gradient(90deg, #E22E3C 0%, #0E90FD 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: "53.13px",
    fontSize: "42px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "400px",
      mx: "auto",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      lineHeight: "1.8rem",
    },
  });

  const SubHeading = (theme) => ({
    maxWidth: "460px",
    margin: "right",
    marginBottom: "20px",
    marginTop: "40px",
    fontSize: "16px",
    fontWight: 400,
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      fontSize: "16px",
      my: "40px",
      textAlign: "center",
    },
  });

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
    marginTop: "60px",
    fontSize: "16px",
    fontWeight: 500, // Fixed typo
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      marginTop: "20px",
      marginBottom: "20px",
    },
  });

  const coverStyle = (theme) => ({
    backgroundImage: 'url("/rougedb-bg.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#F0FBFF",
    paddingY: "80px",
    [theme.breakpoints.down("lg")]: {
      paddingY: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingY: "30px",
    },
  });
  const VideoBoxStyle = (theme) => ({
    pt: "80px",
    maxWidth: "1400px",
    mx: "auto",
    width: "100%",
    [theme.breakpoints.down("lg")]: {
      pt: "40px",
    },
    [theme.breakpoints.down("md")]: {
      pt: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      pt: "30px",
    },
  });

  const CardBoxStyle = (theme) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "29px",
    mt: "63px",
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

  return (
    <Box sx={coverStyle}>
      <CustomWrapper>
        <Grid
          container
          gap={"30px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Grid
            xs={12}
            md={6}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <Typography variant="body1" sx={titleHeading}>
                🌟 Making Data Work for you
              </Typography>
              <Typography variant="h2" sx={FirstHeading}>
                Simplify Data, Amplify Results.
              </Typography>
              <Typography variant="body1" sx={SubHeading}>
                Stop struggling with complex queries—just ask your question, and
                let Rougechat DB handle the rest. Unlock insights, simplify
                analysis, and make smarter decisions effortlessly.
              </Typography>
            </Box>
          </Grid>
          <Grid xs alignItems={"center"} sx={{ height: "fit-content" }}>
            <Box
              sx={{
                background: "#FFF",
                borderRadius: "30px",
                boxShadow: "0px 0px 22px 0px #0000000D",
                p: "50px 40px",
                // maxWidth: "470px",
                height: "fit-content",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  lineHeight: "35.13px",
                  fontSize: "28px",
                  fontWeight: "600",
                  mx: "auto",
                  textAlign: "center",
                }}
              >
                Get your Live Demo
              </Typography>

              <GetDemoForm />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: "120px",
            padding: "0px 0px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={BoxStyle}>
            <Typography variant="h2" sx={Heading}>
              Why Rougechat DB?
            </Typography>
          </Box>
          <Box sx={CardBoxStyle}>
            {fakeData.map((item, i) => (
              <Box
                sx={{
                  bgcolor: "#ffffff",
                  borderRadius: "24px",
                  p: "20px",
                }}
              >
                <Box>
                  <Image
                    src={item?.image_url}
                    width="199"
                    height="177"
                    style={{
                      objectFit: "contain",
                      margin: "auto",
                    }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    mt: "20px",
                    fontSize: "18px",
                    fontWight: 400,
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </CustomWrapper>
    </Box>
  );
};

export default GetHero;
