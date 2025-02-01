import { CustomWrapper } from "@/app/components";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RougeAgent = () => {
  const BoxStyle = (theme) => ({
    maxWidth: "809px",
    textAlign: "center",
    margin: "0",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  });

  const Heading = (theme) => ({
    color: "#FFF",
    lineHeight: "4.8rem",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
      lineHeight: "1.8rem",
    },
  });

  const SubHeading = (theme) => ({
    color: "#FFF",
    textAlign: "left",
    maxWidth: "518px",
    marginBottom: "20px",
    marginTop: "15px",
    fontSize: "16px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  });

  const coverStyle = (theme) => ({
    background: "linear-gradient(98.04deg, #1B88F4 1.76%, #CF374D 91.08%)",
    paddingTop: "134px",
    paddingBottom: "34px",
    [theme.breakpoints.down("lg")]: {
      paddingY: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingY: "30px",
    },
  });
  const InsideCoverStyle = (theme) => ({
    position: "relative",
    paddingBottom: "100px",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: 'url("/rougedb-bg.png")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: 0.13,
      zIndex: 1,
    },
    [theme.breakpoints.down("md")]: {
      paddingBottom: "20px",
    },
  });

  const outerDiv = (theme) => ({
    position: "relative",
    zIndex: 10, // Ensures the background stays behind content
    display: "flex",
    gap: "80px",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  });

  const getExploreButton = (theme) => ({
    background: "#ffffff",
    color: "#121212",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.7,
      transition: ".3s linear",
    },
    borderRadius: "40px",
    padding: "10px 16px",
    maxWidth: "140px",
    marginTop: "44px",
    fontSize: "16px",
    fontWeight: 500, // Fixed typo
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  });

  const router = useRouter();

  return (
    <Box sx={coverStyle}>
      <Box sx={InsideCoverStyle}>
        <CustomWrapper>
          <Box sx={outerDiv}>
            <Box sx={{ flex: "1" }}>
              <Image
                src={"/images/rougechat/simplify_data_rouge_chat.png"}
                width="650"
                height="605"
                style={{
                  objectFit: "contain",
                  borderRadius: "12px",
                }}
              />
            </Box>
            <Box
              sx={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={BoxStyle}>
                <Typography variant="h2" sx={Heading}>
                  rougechat Agent
                </Typography>
                <Typography variant="h5" sx={SubHeading}>
                  Metarouge uses advanced AI agents to automate repetitive tasks
                  and boost productivity. Utilising AI models in your
                  operations, you can automate everything from data entry to
                  generating reports.
                </Typography>
                <Typography
                  variant="body1"
                  onClick={() => router.push("/get-demo")}
                  sx={getExploreButton}
                >
                  Explore
                </Typography>
              </Box>
            </Box>
          </Box>
        </CustomWrapper>
      </Box>
    </Box>
  );
};

export default RougeAgent;
