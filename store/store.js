/**
 * @typedef {Object} State
 * @property {number} value
 */

/**
 * @typedef {Object} Action
 * @prop {item} add
 * @prop {item} subtract
 * @prop {item} reset
 */

/**
 * @callback Notify
 * @param {State} next
 * @param {State} prev
 */

/**
 * @callback Action
 * @param {State}
 * @returns {State}
 */

export const Action = () => {}

/**
* @callback Update
* @param {Action}
*/

/**
 * @callback Subscribe
 * @param {Notify} notify
 */

/**
 *@callback EmptyFn
 */

/**
* @typedef {Object} store
* @prop {Update} update
* @prop {Subscribe} subscribe
*/

//initial state verification set value to 0
const initial = {
  value: 0,
};


//create store function with initial state
/**
 * @type {Array<State>}
 */
const states = [initial];

/**
 * @type {Array<Notify>}
 */
let notifiers = [];

/**
 * @param {Action} action 
 */

export const update = (action) => {
  if (typeof action !== 'function') {
    throw new Error('Action must be a function');
  }
  const prev = Object.freeze({ ...states[0] });
  const next = Object.freeze({ ...action(prev) });

  const handler = (notify) => notify(prev, next);
  notifiers.forEach(handler);
  states.unshift(next);
};

/**
 * 
 * @param {Notify} notify
 * @returns {}
 *//*
export const subscribe = (notify) => {
  notifiers.push(notify);

  const unsubscribe = () => {
    const handler = (current) => current !== notify
    const result = notifiers.filter(handler);
    notifiers = result;
  }
  return unsubscribe; 
};*/

///////////////////////////////////////////////////////
//create store function with initial state
/**
 * @typedef {Function} Reducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}  
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

/*
export function createStore(reducer) {
  
  let state;
  let listeners = [];

  function getState() {
    return state;
  };

   function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };


  // Initialize state
  dispatch({ type: '__INIT__' });

  return { getState, dispatch, subscribe };
};

*/