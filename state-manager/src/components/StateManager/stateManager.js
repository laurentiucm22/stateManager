import { useEffect, useState } from "react";

import { subscribe, publisher, getState } from "../../utilities/pubsub";

const StateManager = () => {
  const [state, setState] = useState(getState().count);
  console.log(state);
  const callback = (newState) => {
    return setState(newState);
  };

  useEffect(() => subscribe("counter", callback));

  const handleClick = (direction) => {
    publisher("counter", state, direction);
  };

  return [handleClick];
};

export default StateManager;
