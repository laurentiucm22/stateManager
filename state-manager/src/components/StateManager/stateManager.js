import React from "react";
import { Button } from "@mui/material";
import {
  subscribe,
  incrementCount,
  decrementCount,
} from "../../utilities/pubsub";

const StateManager = () => {
  const handleIncrement = () => {
    subscribe("Increment", incrementCount());
  };

  const handleDecrement = () => {
    subscribe("Decrement", decrementCount());
  };

  return (
    <div>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
    </div>
  );
};

export default StateManager;
