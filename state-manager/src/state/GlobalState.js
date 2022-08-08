import { Button } from "@mui/material";
import React, { useState } from "react";

const initialState = {
  count: 0,
};

const state = () => {
  return {
    state: initialState.count,
  };
};

console.log(state);

const actions = {
  incrementCounter: (store, amount) => {
    const newCounterValue = store.state + amount;
    console.log(newCounterValue);
  },
};
// const useGlobal = globalHook(initialState, actions);

const GlobalState = () => {
  const [globalState, setGlobalState] = useState(initialState.count);

  return (
    <div>
      <Button
        onClick={() => console.log(actions.incrementCounter(initialState, 1))}
      >
        Increment
      </Button>
      <Button>Decrement</Button>
    </div>
  );
};

export default GlobalState;
