import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { CustomWrapper, GetDemoContainer } from "@/app/components";

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

const fakeData2 = [
  {
    image_url: "/images/rougechat/why/gif-03.gif",
    title: "Instant Insights",
    decs: "Instant Insights Make faster, data-driven decisions with real-time access to actionable insights.",
  },
  {
    image_url: "/images/rougechat/why/gif-01.gif",
    title: "Empowered Teams",
    decs: "Enable everyone to retrieve critical data without relying on technical expertise.",
  },
  {
    image_url: "/images/rougechat/why/gif-02.gif",
    title: "Smarter Operations",
    decs: "Boost efficiency with AI-powered data interaction.",
  },
];

const RougeChatDBWhy = () => {
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
    maxWidth: "790px",
    margin: "auto",
    marginTop: "27px",
    fontSize: "16px",
    // fontWight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
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

  const CardBoxStyle = (theme) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "29px",
    mt: "81px",
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

  const BoxBuildStyle = (theme) => ({
    maxWidth: "809px",
    textAlign: "center",
    margin: "0 auto",
    mt: "124px",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  });
  const DemoBox = (theme) => ({
    mt: "135px",
    [theme.breakpoints.down("xs")]: {
      mt: "60px",
    },
  });
  return (
    <Box sx={coverStyle}>
      <CustomWrapper>
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
        <Box sx={BoxBuildStyle}>
          <Typography variant="h2" sx={Heading}>
            Built for Decision Makers
          </Typography>
          <Typography variant="body1" sx={SubHeading}>
            Rougechat DB empowers leaders by providing instant, actionable
            insights. By bypassing the need for technical experts to retrieve
            data, it allows decision-makers to access critical information
            effortlessly. From streamlining data retrieval to delivering precise
            analytics, Rougechat DB accelerates decision-making, reduces
            reliance on technical teams, and keeps your business ahead of the
            competition.
          </Typography>
        </Box>
        <Box sx={CardBoxStyle}>
          {fakeData2.map((item, i) => (
            <Box
              sx={{
                position: "relative",
                background:
                  i == 1
                    ? "linear-gradient(180deg, #3B7AD6 0%, #D63446 100%)"
                    : "#FFF",
                borderRadius: "24px",
                padding: "1px",
              }}
            >
              <Box
                sx={{
                  scale: i == 1 ? 1.6 : 1,
                  bgcolor: "#FFF",
                  borderRadius: "24px",
                  p: i == 1 ? "45px" : "30px",
                }}
              >
                <Box
                  sx={{
                    width: i == 1 ? "110px" : "76px",
                    height: i == 1 ? "110px" : "76px",
                    margin: "auto",
                  }}
                >
                  <Image
                    src={item?.image_url}
                    quality={100}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    width={110}
                    height={110}
                    alt="image"
                  />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    mt: "20px",
                    fontSize: i == 1 ? "22px" : "16px",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mt: i == 1 ? "33px" : "20px",
                    maxWidth: i == 1 ? "340px" : "250px",
                    fontSize: i == 1 ? "16px" : "14px",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  {item.decs}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={DemoBox}>
          <GetDemoContainer />
        </Box>
      </CustomWrapper>
    </Box>
  );
};

export default RougeChatDBWhy;
