import React from "react";
import { Button } from "@mui/material";
import { subscribe } from "../../utilities/pubsub";

const StateManager = () => {
  const handleTest = () => {
    subscribe("Increment", () => console.log("Increment"));
  };
  return (
    <div>
      <Button onClick={handleTest}>Increment</Button>
    </div>
  );
};

export default StateManager;
