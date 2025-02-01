import { Box, Typography } from "@mui/material";
import { CustomWrapper } from "../../components/index";
import { Typewriter } from "react-simple-typewriter";
import { useRouter } from "next/navigation";

const RougeHome = () => {
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
    maxWidth: "440px",
    margin: "auto",
    marginBottom: "40px",
    fontSize: "14px",
    fontWight: 500,
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  });
  const Heading = (theme) => ({
    fontFamily: "Be Vietnam Pro, sans-serif",
    background: "linear-gradient(90deg, #E22E3C 0%, #0E90FD 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: "5.3rem",
    fontSize: "70px",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      lineHeight: "1.8rem",
    },
  });

  const SubHeading = (theme) => ({
    maxWidth: "797px",
    margin: "auto",
    fontFamily: "Be Vietnam Pro, sans-serif",
    marginBottom: "20px",
    marginTop: "60px",
    fontSize: "16px",
    fontWight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      my: "40px",
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

  const router = useRouter();

  return (
    <Box sx={coverStyle}>
      <CustomWrapper>
        <Box sx={BoxStyle}>
          <Typography variant="body1" sx={titleHeading}>
            🌟 Turn Every Business Question into Data-Driven Insights
          </Typography>
          <Typography variant="h2" sx={Heading}>
            Your Questions
          </Typography>
          <Typography variant="h2" sx={Heading}>
            <Typewriter
              words={["Instant Insights."]}
              cursor
              loop={false}
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={150}
              delaySpeed={1000}
            />
          </Typography>
          <Typography variant="body1" sx={SubHeading}>
            💡 Stop struggling with complex queries—ask your question, and
            Rougechat DB delivers instant insights. Simplify data analysis and
            make smarter, data-driven decisions effortlessly.
          </Typography>
          <Typography
            variant="body1"
            onClick={() => router.push("/get-demo")}
            sx={getDemoButton}
          >
            Get a Demo
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "0px 0px",
            // backgroundColor: "#FFF",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box sx={VideoBoxStyle}>
            <Box
              sx={{
                maxWidth: "1000px",
                mx: "auto",
                width: "100%",
              }}
            >
              <Box>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "auto",
                    margin: "auto",
                    boxShadow: "0px 0px 22px 0px #0000000D",
                    border: "15.06px solid #FDFEFF",
                    borderRadius: "15.06px",
                    objectFit: "cover",
                    overflow: "hidden",
                    // backgroundColor: "#FFFFFF",
                  }}
                >
                  <source src="/video/rougechat-db-1.mp4" type="video/mp4" />
                </video>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomWrapper>
    </Box>
  );
};

export default RougeHome;
