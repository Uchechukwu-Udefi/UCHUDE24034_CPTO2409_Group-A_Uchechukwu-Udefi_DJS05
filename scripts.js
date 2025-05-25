
import { createStore } from './store/store.js';
import { tallyReducer } from './store/reducer.js';
import { add, subtract, reset } from './store/actions.js';

// Create the store
const store = createStore(tallyReducer);

// Subscribe to state changes by listening to store updates.
// and unsubscribe when no longer needed.
const unsubscribe = store.subscribe(() => {
  console.log('State changed:', store.getState());

});

// Dispatch actions to modify the state
// and log the results to the console
//initial state verification set value to 0 and result log to console.
console.log('Initial state:', store.getState());
store.dispatch(add());       
store.dispatch(add()); 
store.dispatch(subtract());  
store.dispatch(reset());  

// Optionally unsubscribe to stop listening to state changes
//unsubscribe();