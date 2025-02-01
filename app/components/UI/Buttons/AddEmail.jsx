import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button } from "@mui/material";

export default function AddEmail() {
  return (
    <Paper
      component="form"
      sx={{
        p: "4px",
        display: "flex",
        alignItems: "center",
        maxWidth: "414px",
        boxShadow: "0px 0px 16px 0px #00000017",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <OpenInNewIcon fontSize="24" color="#737373" />
      </IconButton>
      <InputBase
        sx={{ mx: 1, flex: 1, color: "#737373" }}
        placeholder="Enter Email Address"
        inputProps={{ "aria-label": "Enter Email Address" }}
      />
      <Button
        sx={{
          fontFamily: "Rubik, sans-serif",
          background: "#0B7FE4",
          color: "#FFF",
          fontFamily: "Rubik, sans-serif",
          fontSize: "14px",
          fontWeight: 700,
          lineHeight: "28px",
          letterSpacing: "0.24px",
          textAlign: "left",
          textTransform: "none",
          p: "10px 20px",
          ":hover": {
            background: "#075BA7",
            color: "#FFF",
          },
        }}
      >
        Book a Demo
      </Button>
    </Paper>
  );
}
