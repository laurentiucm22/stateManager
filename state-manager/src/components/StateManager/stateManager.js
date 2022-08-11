import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import {
  subscribe,
  publisher,
  getState,
  unsubscribe,
} from "../../utilities/pubsub";

const StateManager = () => {
  const [state, setState] = useState(getState().count);

  const callback = (newState) => {
    return setState(newState);
  };
  useEffect(() => {
    subscribe("counter", callback);
  }, []);

  useEffect(() => {
    return () => unsubscribe("counter", callback);
  }, []);

  const handleClick = (direction) => {
    publisher("counter", state, direction);
  };

  return (
    <>
      <Button
        variant="contained"
        size="large"
        sx={{
          marginRight: "20px",
          border: "1px solid #fff",
          padding: "0.3rem 1.4rem",
          color: "secondary.txtClr",
          fontWeight: "bold",
        }}
        onClick={() => handleClick("increase")}
      >
        Increment
      </Button>
      <Typography paragraph={true}>{state}</Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          border: "1px solid #fff",
          color: "secondary.txtClr",
          fontWeight: "bold",
        }}
        onClick={() => handleClick("decrease")}
      >
        Decrement
      </Button>
    </>
  );
};

export default StateManager;
