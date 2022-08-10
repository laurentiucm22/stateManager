let newState;

let myEvent = {
  counter: [],
};
export const globalState = {
  count: 0,
};

export const getState = () => globalState;

export const subscribe = (eventName, callBack) => {
  myEvent[eventName] = myEvent[eventName] ? myEvent[eventName] : [];
  myEvent[eventName].push(callBack);
};

export const publisher = (eventName, state, direction) => {
  newState = changeCount(state, direction);
  myEvent[eventName].forEach((callBack) => callBack(newState));
};

const changeCount = (state, direction) => {
  if (direction === "increase") return state + 1;
  if (direction === "decrease") return state - 1;
  console.log(state);
};
