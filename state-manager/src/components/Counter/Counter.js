import { Button, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getState, publisher, subscribe } from "../../utilities/pubsub";
import classes from "./Counter.module.css";
// import { handleClick } from "../StateManager/stateManager";

const Counter = () => {
  const [state, setState] = useState(getState().count);

  const callback = (newState) => {
    return setState(newState);
  };

  useEffect(() => {
    subscribe("counter", callback);
  });
  const handleClick = (direction) => {
    publisher("counter", state, direction);
  };

  console.log(state);
  return (
    <React.Fragment>
      <Box
        sx={{
          maxWidth: " 40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "1rem",
          border: "1px solid white",
          color: "white",
          padding: "2rem 5rem",
          backgroundColor: "secondary.main",
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
          <Button
            className={`${classes["counter_btn"]}`}
            variant="contained"
            size="large"
            sx={{
              marginRight: "20px",
              border: "1px solid #fff",
              padding: "0.3rem 1.4rem",
            }}
            onClick={() => handleClick("increase")}
          >
            Increment
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              border: "1px solid #fff",
            }}
            onClick={() => handleClick("decrease")}
          >
            Decrement
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Counter;
