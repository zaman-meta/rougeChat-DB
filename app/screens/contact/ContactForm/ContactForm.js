import { ButtonLoader, CustomButton, CustomWrapper } from "@/app/components";
import {
  Alert,
  Box,
  Button,
  FormControl,
  Snackbar,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import React, { startTransition, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { sendSubmission } from "@/lib/ContactUsPage/getContactUs";
import { useRouter } from "next/navigation";
import SuccessfulModal from "@/app/components/modals/successfulModal";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      fontSize: "15px",
      "& fieldset": {
        borderColor: "transparent",
        borderRadius: "10px",
      },
      "& input::placeholder": {
        color: "#575b5d",
        fontSize: "16px",
      },
      "&:focus": {
        // Corrected focus styling
        "& fieldset": {
          borderColor: "transparent",
        },
      },
      "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
        "-webkit-appearance": "none",
      },
    },
  },
}));

const ContactForm = ({ data }) => {
  const BootstrapButton = styled(Button)({
    backgroundColor: "#DD3039 !important",
    color: "#FFF",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    marginTop: "20px",
    lineHeight: "normal",
    padding: "12px 24px",
    borderRadius: "8px",
    fontFamily: "poppins",
    width: "200px",
    height: "45px",
    textTransform: "inherit",
    "&:hover": {
      backgroundColor: "#DD3039",
      borderColor: "#0062cc",
      boxShadow: "0px 3px 28px 0px rgba(221, 48, 57, 0.30);",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#DD3039",
      // borderColor: '#005cbf',
    },
    "&:focus": {
      boxShadow: "0px 3px 28px 0px rgba(221, 48, 57, 0.30);",
    },
  });

  console.log(data);
  const router = useRouter();
  const classes = useStyles();
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    setFormData([...data?.contact_form?.fields]);
  }, [data, success]);


  const handleChange = (index, value) => {
    setFormData((prevFormData) =>
      prevFormData.map((item, idx) =>
        idx === index ? { ...item, value } : item
      )
    );
  };

  const validateFormData = (data) => {
    return data.map((item) => {
      if (item.required && (!item.value || item.value.trim() === "")) {
        return { ...item, isWrong: true };
      }
      if (item.blockType === "number") {
        if (!/^[+0-9]*$/.test(item.value)) {
          return { ...item, isWrong: true };
        }
      }
      if (item.blockType === "email") {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(item.value)) {
          return { ...item, isWrong: true };
        }
      }
      return { ...item, isWrong: false };
    });
  };

  const handleMail = async () => {
    const validatedData = validateFormData(formData);
    // console.log(validatedData);
    setFormData([...validatedData]);

    const hasErrors = validatedData.some((item) => item.isWrong);

    if (hasErrors) {
      console.log("Form validation failed. Please correct the errors.");
      return;
    }
    console.log(formData);

    const dataToSend = Object.entries(validatedData).map(([name, value]) => ({
      field: value.name,
      value: value.value ?? "",
    }));

    try {
      setIsLoading(true);
      startTransition(() => {
        sendSubmission(data?.contact_form?.id, dataToSend).then((res) => {
          console.log(res);
          if (res.status) {
            setFormData([...data?.contact_form?.fields]);
            setIsLoading(false);
            setSuccess(true);
            router.push("/");
          } else {
            setIsLoading(false);
          }
        });
      });
    } catch (error) {
      setIsLoading(false);
    }


  };

  return (
    <CustomWrapper>
      <Box className="contact" sx={{ paddingY: "70px" }}>
        <Box className="row ">
          <Box className="col-lg-5 order-last order-lg-first">
            <Box className="contact-content">
              <Typography variant="h2">
                {data?.title?.map((item, i) => {
                  if (item.coloredText) {
                    return (
                      <span style={{ color: item?.color }}>
                        {" "}
                        {item?.coloredText}
                      </span>
                    );
                  } else {
                    return item;
                  }
                })}
              </Typography>
              <p style={{ marginBottom: "30px", fontFamily: "poppins" }}>
                {data?.sub_title}
              </p>

              <FormControl sx={{ width: "100%" }}>
                {formData?.map((item, index) => {
                  if (item.blockType === "text") {
                    return (
                      <Box className="mb-4">
                        <TextField
                          id="outlined-required"
                          placeholder={item?.label}
                          value={item?.value}
                          // error={nameError}
                          className={classes.root}
                          onChange={(e) => handleChange(index, e.target.value)}
                          sx={{
                            width: "100%",
                            backgroundColor: "#FAFAFA",
                            border: "none",
                            outline: "none",
                            borderRadius: "10px",
                          }}
                        />
                        {item?.isWrong && (
                          <Typography
                            variant="h5"
                            sx={{ fontSize: "12px", color: "red" }}
                          >
                            {item?.label} is required
                          </Typography>
                        )}
                      </Box>
                    );
                  } else if (item.blockType === "email") {
                    return (
                      <Box className="mb-4">
                        <TextField
                          id="outlined-required"
                          placeholder={item?.label}
                          value={item?.value}
                          // error={nameError}
                          className={classes.root}
                          onChange={(e) => handleChange(index, e.target.value)}
                          type="email"
                          sx={{
                            width: "100%",
                            backgroundColor: "#FAFAFA",
                            border: "none",
                            outline: "none",
                            borderRadius: "10px",
                          }}
                        />
                        {item?.isWrong && (
                          <Typography
                            variant="h5"
                            sx={{ fontSize: "12px", color: "red" }}
                          >
                            {item?.label} is required
                          </Typography>
                        )}
                      </Box>
                    );
                  } else if (item.blockType === "number") {
                    return (
                      <Box className="mb-4">
                        <TextField
                          id="outlined-required"
                          placeholder={item?.label}
                          value={item?.value}
                          // error={nameError}
                          className={classes.root}
                          onChange={(e) => handleChange(index, e.target.value)}
                          sx={{
                            width: "100%",
                            backgroundColor: "#FAFAFA",
                            border: "none",
                            outline: "none",
                            borderRadius: "10px",
                          }}
                        />
                        {item?.isWrong && (
                          <Typography
                            variant="h5"
                            sx={{ fontSize: "12px", color: "red" }}
                          >
                            {item?.label} is required
                          </Typography>
                        )}
                      </Box>
                    );
                  } else {
                    return (
                      <Box className="mb-4">
                        <TextField
                          id="outlined-required"
                          placeholder={item?.label}
                          value={item?.value}
                          // error={nameError}
                          className={classes.root}
                          onChange={(e) => handleChange(index, e.target.value)}
                          sx={{
                            width: "100%",
                            backgroundColor: "#FAFAFA",
                            border: "none",
                            outline: "none",
                            borderRadius: "10px",
                          }}
                          multiline
                          minRows={4}
                          maxRows={5}
                        />
                        {item?.isWrong && (
                          <Typography
                            variant="h5"
                            sx={{ fontSize: "12px", color: "red" }}
                          >
                            {item?.label} is required
                          </Typography>
                        )}
                      </Box>
                    );
                  }
                })}
                <BootstrapButton
                  variant="contained"
                  disableRipple
                  onClick={() => handleMail()}
                >
                  {/* Send Message */}
                  {/* <ButtonLoader/> */}
                  {!isLoading ? (
                    data?.contact_form?.submitButtonLabel
                  ) : (
                    <ButtonLoader />
                  )}
                </BootstrapButton>
              </FormControl>
            </Box>
          </Box>
          <Box className="col-lg">
            <Image
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              src={data?.main_image?.url}
              alt={"contact-hero"}
              width={525}
              height={451}
            />
          </Box>
        </Box>
      </Box>
      <SuccessfulModal open={success} setOpen={setSuccess} />
    </CustomWrapper>
  );
};

export default ContactForm;
