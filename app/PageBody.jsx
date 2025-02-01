"use client";
import { Box } from "@mui/material";
import RougeHome from "./screens/home/Hero";
import Insights from "./screens/home/Insights";
import Dashboards from "./screens/home/dashboards";
import RougeAgent from "./screens/home/RougeAgent";
import RougeChatDBWhy from "./screens/home/RougeChatDBWhy";

export default function PageBody() {
  return (
    <Box>
      <RougeHome />
      <Insights />
      <Dashboards />
      <RougeAgent />
      <RougeChatDBWhy />
    </Box>
  );
}
