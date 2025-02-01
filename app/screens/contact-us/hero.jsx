import { Box, Grid, Typography } from "@mui/material";
import { CustomWrapper } from "../../components";
import ContactFormComponent from "./contactFormComponent";

const GetContact = () => {
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
    maxWidth: "130px",
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

  const mainGirdStyle = (theme) => ({
    justifyContent: "space-between",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  });

  return (
    <Box sx={coverStyle}>
      <CustomWrapper>
        <Grid container gap={"30px"} alignItems={"center"} sx={mainGirdStyle}>
          <Grid
            xs={12}
            md={6}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <Typography variant="body1" sx={titleHeading}>
                🤚 Say hello!
              </Typography>
              <Typography variant="h2" sx={FirstHeading}>
                Contact us
              </Typography>
              <Typography variant="body1" sx={SubHeading}>
                Our team can help you understand how our product can fit into
                your existing environment, answer technical questions, or
                schedule a personal demo.
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
                Get in Touch with us
              </Typography>

              <ContactFormComponent />
            </Box>
          </Grid>
        </Grid>
      </CustomWrapper>
    </Box>
  );
};

export default GetContact;
