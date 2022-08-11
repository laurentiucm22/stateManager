import React from "react";
import Counter from "../components/Counter/Counter";
import { Box } from "@mui/material";

const CounterPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#131313",
      }}
    >
      <Counter />
    </Box>
  );
};

export default CounterPage;
