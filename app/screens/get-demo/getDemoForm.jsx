import { styled } from "@mui/styles";
import { startTransition, useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import sendMessage from "../../../../lib/sendEmail";

const CssTextField = styled(TextField)({
  marginBottom: "20px",
  "& text": {
    color: "#8A8A8A",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #717171",
      borderRadius: "50px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#E22E3B",
    },
    "& input::placeholder": {
      color: "#8A8A8A",
      fontSize: "16px",
    },
    "&:focus": {
      "& fieldset": {
        borderColor: "transparent",
      },
    },
    "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
    },
  },
});

// *  VALIDATION EMAIL ADDRESS
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmailValid = (email) => {
  return emailRegex.test(email);
};

const initializeValue = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const initializeErrors = {
  firstName: "",
  email: "",
  phone: "",
};

const GetDemoForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ ...initializeValue });
  const [response, setResponse] = useState({ status: null, data: null });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "This field is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;

    // Validate required fields
    Object.keys(formData).forEach((field) => {
      const fieldName = field;

      if (!formData[fieldName].trim()) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: "This field is required",
        }));
        formIsValid = false;
      } else if (field === "email" && !isEmailValid(formData[fieldName])) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "provide a valid email address",
        }));
        formIsValid = false;
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: "",
        }));
      }
    });
    // console.log("Form submitted:", formIsValid, errors, formData);

    if (formIsValid) {
      console.log("Form submitted:", formData);

      // Your form submission logic here
      try {
        setIsLoading(true);
        startTransition(() => {
          sendMessage(formData).then((res) => {
            // console.log(res)
            if (res.status) {
              setFormData(initializeValue);
              setIsLoading(false);
              setResponse({ status: res.status, data: res.message });
              setErrors(initializeErrors);
            } else {
              setResponse({ status: res.status, data: res.message });
              setIsLoading(false);
            }
          });
        });
      } catch (error) {
        // console.log('some things wrong', error)
        setResponse({ status: false, data: "some things wrong" });
        setIsLoading(false);
      }
    }
  };

  return (
    <Box
      sx={{ mt: "46px" }}
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Box sx={{ display: "flex", gap: "6px" }}>
        <Box className="mb-1" sx={{ width: "100%" }}>
          <CssTextField
            InputLabelProps={{ className: "textField__label" }}
            inputProps={{ className: "textField__input" }}
            id="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName}
            fullWidth
            sx={{
              width: "100%",
              outline: "none",
              color: "#8A8A8A",
            }}
          />
        </Box>
        <Box className="mb-1" sx={{ width: "100%" }}>
          <CssTextField
            InputLabelProps={{ className: "textField__label" }}
            inputProps={{ className: "textField__input" }}
            id="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            sx={{
              width: "100%",
              outline: "none",
              color: "#8A8A8A",
            }}
            required={false}
          />
        </Box>
      </Box>
      <Box className="mb-1" sx={{ width: "100%" }}>
        <CssTextField
          InputLabelProps={{ className: "textField__label" }}
          inputProps={{ className: "textField__input" }}
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(errors.email)}
          helperText={errors.email}
          fullWidth
          sx={{
            width: "100%",
            outline: "none",
            color: "#8A8A8A",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "6px" }}>
        <Box className="mb-1" sx={{ width: "100%" }}>
          <CssTextField
            InputLabelProps={{ className: "textField__label" }}
            inputProps={{ className: "textField__input" }}
            id="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.company)}
            helperText={errors.company}
            fullWidth
            sx={{
              width: "100%",
              outline: "none",
              color: "#8A8A8A",
            }}
          />
        </Box>
        <Box className="mb-1" sx={{ width: "100%" }}>
          <CssTextField
            InputLabelProps={{ className: "textField__label" }}
            inputProps={{ className: "textField__input" }}
            id="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            fullWidth
            sx={{
              width: "100%",
              outline: "none",
              color: "#8A8A8A",
            }}
          />
        </Box>
      </Box>
      <Button
        type="submit"
        disabled={isLoading ? true : false}
        sx={{
          backgroundColor: "#000 !important", // Force the background color
          color: "#FFF !important", // Force the text color
          border: "1px solid #000 !important", // Force the border
          cursor: "pointer",
          "&:hover": {
            color: "#000 !important", // Force hover text color
            background: "#FFF !important", // Force hover background color
            transition: ".3s linear",
          },
          borderRadius: "40px",
          padding: "10px 16px",
          width: "100%",
          textAlign: "center",
          margin: "auto",
          fontSize: "16px",
          fontWeight: 500,
          textTransform: "capitalize",
        }}
      >
        {isLoading ? "Loading..." : "Request Demo"}
      </Button>
      {response?.status === true && (
        <Alert
          variant="filled"
          sx={{ bgcolor: "#40916c", mt: "20px" }}
          severity="success"
        >
          {response.data}
        </Alert>
      )}
      {response?.status === false && (
        <Alert
          variant="filled"
          sx={{ bgcolor: "#e5383b", mt: "20px" }}
          severity="error"
        >
          {response.data}
        </Alert>
      )}
      <Typography
        variant="body1"
        sx={{
          fontSize: "14px",
          fontWight: "400",
          textAlign: "center",
          mt: "24px",
        }}
      >
        By signing up, I agree{" "}
        <span style={{ color: "#0F8EFF" }}>terms and conditions</span>
      </Typography>
    </Box>
  );
};

export default GetDemoForm;
