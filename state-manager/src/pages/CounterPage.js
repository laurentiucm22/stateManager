import React, { useState } from "react";
import Counter from "../components/Counter";
import { Box } from "@mui/material";
import { state } from "../constants/state";

const CounterPage = () => {
  const [counter, setCounter] = useState(0);

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
      <Counter counter={counter} setCounter={setCounter} />
    </Box>
  );
};

export default CounterPage;
