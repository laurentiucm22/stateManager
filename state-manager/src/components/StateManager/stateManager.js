import React from "react";
import { Button } from "@mui/material";
import { publisher } from "../../utilities/pubsub";
import { useCustomState } from "../../CustomHook/CustomHook";

const StateManager = () => {
  const state = useCustomState();

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
