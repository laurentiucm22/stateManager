// let myEvent = {};
let myEvents = [];

function randomId(number) {
  return Math.floor(Math.random() * number);
}

export const subscribe = (eventName, callBack) => {
  let createSub = {
    id: randomId(10),
    name: eventName,
    callBack: callBack,
  };
  myEvents.push(createSub);
  console.log(myEvents);
};

export const publisher = (eventName) => {
  myEvents[eventName].forEach((callBack) => callBack());
  // the callBack(newState);
};
// It's not working anymore

// export const subscribe = (eventName, callBack) => {
//   myEvent[eventName] = myEvent[eventName] ? myEvent[eventName] : [];
//   myEvent[eventName].push(callBack);
//   console.log(myEvent);
// };

// export const unsubscribe = (eventName, callBack) => {
//   myEvent[eventName] = myEvent[eventName] ? myEvent[eventName] : [];
//   myEvent[eventName].pop(callBack);
// };

//In momentul in care dam subscriem, observ datele
//
