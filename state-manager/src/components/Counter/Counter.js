import { Box } from "@mui/material";
import React from "react";
import classes from "./Counter.module.css";
import StateManager from "../StateManager/stateManager";
import { useCustomState } from "../../CustomHook/CustomHook";

const Counter = () => {
  const state = useCustomState();

  return (
    <React.Fragment>
      <Box
        sx={{
          maxWidth: " 40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "1rem",
          color: "white",
          padding: "2rem 5rem",
          backgroundColor: "secondary.main",
          boxShadow: "0px 0px 10px #fff",
        }}
      >
        <h2 className={`${classes["counter_title"]}`}>Volum</h2>
        <p className={`${classes["counter_value"]}`}>{state}</p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <StateManager />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Counter;
