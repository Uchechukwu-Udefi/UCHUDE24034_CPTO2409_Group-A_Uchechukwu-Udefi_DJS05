/**
 * @typedef {Object} State
 * @property {number} value
 */

export const add = () => ({ type: 'ADD' });
export const subtract = () => ({ type: 'SUBTRACT' });
export const reset = () => ({ type: 'RESET' });


/*
//increment function
export const add = () => {
  state = {
    ...state,
    value: state.value + 1,
  };
  return state;
};

//decrement function
export const subtract = () => {
    state = {
        ...state,
        value: state.value - 1,
    };
    return state;
};

//reset function
export const reset = () => {
    state = {
        ...state,
        value: 0,
    };
    return state;
};

//log function
export const get = (state, key) => {
    return state[key];
};

*/