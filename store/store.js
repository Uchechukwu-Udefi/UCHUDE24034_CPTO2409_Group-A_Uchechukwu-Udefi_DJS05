/**
 * @typedef {Object} State
 * @property {number} count - The current value of the counter which starts at 0
 */

/**
 * @typedef {Object} Action
 * @property {string} type - The action type ('ADD', 'SUBTRACT', 'RESET')
 */

/**
 * A reducer function that takes the current state and an action, and returns a new state.
 * 
 * @callback Reducer
 * @param {State} state - The current state
 * @param {Action} action - The dispatched action
 * @returns {State} The new state after applying the action
 */

/**
 * A listener function to be called on every state change.
 * 
 * @callback Listener
 */

/**
 * @typedef {Object} Store
 * @property {function(): State} getState - Returns the current state
 * @property {function(Action): void} dispatch - Dispatches an action to update the state
 * @property {function(Listener): function(): void} subscribe - Subscribes to state changes, returns an unsubscribe function
 */

/**
 * Creates a Redux-like store to manage state.
 * 
 * @param {Reducer} reducer - The reducer function used to update state
 * @returns {Store} The store object with `getState`, `dispatch`, and `subscribe` methods
 */

export function createStore(reducer) {
  let state;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }

  // Initialize state
  dispatch({ type: '__INIT__' });

  return { getState, dispatch, subscribe };
};
