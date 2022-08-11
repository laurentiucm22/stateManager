import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getState, subscribe, unsubscribe } from "../../utilities/pubsub";
import classes from "./Counter.module.css";
import StateManager from "../StateManager/stateManager";

const Counter = () => {
  const [state, setState] = useState(getState().count);

  const callback = (newState) => {
    console.log(newState);
    return setState(newState);
  };

  useEffect(() => {
    subscribe("counter", callback);
  }, []);

  useEffect(() => {
    return () => unsubscribe("counter", callback);
  }, []);

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
        <h2 className={`${classes["counter_title"]}`}>Play with me</h2>
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
