
import { createStore } from './store/store.js';
import { tallyReducer } from './store/reducer.js';
import { add, subtract, reset } from './store/actions.js';

// Create the store
const store = createStore(tallyReducer);

// Subscribe to state changes
const unsubscribe = store.subscribe(() => {
  console.log('State changed:', store.getState());
});

// Sample dispatches
//initial state verification set value to 0 and result log to console.
console.log('Initial state:', store.getState());
store.dispatch(add());       
store.dispatch(add()); 
store.dispatch(subtract());  
store.dispatch(reset());  

// Optionally unsubscribe
//unsubscribe();

    /*
// Subscribe to state changes
const handler = (prev, next) => console.log("Prev:", prev, "Next:", next);
const unsubscribe = subscribe(handler);

// Define an action
const customAction = () => (state) => ({
  ...state,
  value: state.value + 1,
}); */

update(customAction());
update(customAction());
update(customAction());
unsubscribe();

/*

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

*/