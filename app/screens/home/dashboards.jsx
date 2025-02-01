import { CustomWrapper } from "@/app/components";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const Dashboards = () => {
  const BoxStyle = (theme) => ({
    maxWidth: "809px",
    textAlign: "center",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  });

  const Heading = (theme) => ({
    background: "linear-gradient(90deg, #E22E3C 0%, #0E90FD 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: "53.13px",
    fontWight: 700,
    fontSize: "42px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      lineHeight: "1.8rem",
    },
  });

  const SubHeading = (theme) => ({
    maxWidth: "597px",
    margin: "auto",
    marginBottom: "20px",
    marginTop: "44px",
    fontSize: "16px",
    fontWight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      marginTop: "20px",
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
    marginTop: "44px",
    fontSize: "16px",
    fontWeight: 500, // Fixed typo
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      marginTop: "20px",
      marginBottom: "20px",
    },
  });

  const coverStyle = (theme) => ({
    position: "relative",
    backgroundColor: "#F0FBFF",
    pt: "80px",
    pb: "150px",
    overflow: "hidden",
    [theme.breakpoints.down("lg")]: {
      paddingY: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingY: "30px",
    },
  });

  const router = useRouter();

  return (
    <Box sx={coverStyle}>
      <CustomWrapper>
        <Box sx={BoxStyle}>
          <Typography variant="h2" sx={Heading}>
            From Dashboards to Conversations,
          </Typography>
          <Typography variant="h2" sx={Heading}>
            Meet Rougechat DB
          </Typography>
          <Typography variant="body1" sx={SubHeading}>
            Why rely on technical expertise when you can simply ask your
            question and get the insights you need?
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
            position: "relative",
            zIndex: 20,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              pt: { xs: "50px", md: "50px", lg: "40px", xl: "40px" },
              maxWidth: "1400px",
              mx: "auto",
              width: "100%",
            }}
          >
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
                  }}
                >
                  <source src="/video/rougechat-db-2.mp4" type="video/mp4" />
                </video>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomWrapper>
      <Box
        sx={{
          position: "absolute",
          width: { md: "350px", xl: "600px" },
          height: { md: "350px", xl: "600px" },
          top: { md: "210px", xl: "180px" },
          right: { md: "00px", xl: "100px" },
          backgroundImage: 'url("/images/rouge-chat-ellipse-6.png")',
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "rotate(150deg)",
          zIndex: 10,
        }}
      ></Box>
    </Box>
  );
};

export default Dashboards;
