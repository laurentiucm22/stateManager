import { useEffect, useState } from "react";
import { getState, subscribe, unsubscribe } from "../utilities/pubsub";

export const useCustomState = () => {
  const [state, setState] = useState(getState().count);

  const callback = (newState) => {
    return setState(newState);
  };

  useEffect(() => {
    subscribe("counter", callback);

    return () => unsubscribe("counter", callback);
  }, []);

  return state;
};
