//initial state verification set value to 0 and result log to console.
let state = {
  value: 0,
};

const getState = () => state;

console.log(getState()); 

//increment function
const add = () => {
  state = {
    ...state,
    value: state.value + 1,
  };
  return state;
};

//increment function test
console.log(add()); 
console.log(add());

//decrement function
const subtract = () => {
    state = {
        ...state,
        value: state.value - 1,
    };
    return state;
};

//decrement function test
console.log(subtract());

//reset function
const reset = () => {
    state = {
        ...state,
        value: 0,
    };
    return state;
};

//reset function test
console.log(reset());

//log function
const log = (state, callback) => {
    callback(state.value);
};
//log function test
log(state, (value) => {
    console.log(`Current value is: ${value}`);
});