/**
 * @typedef {Object} State
 * @property {number} count - The current tally count
 * @property {string} [comment] - An optional message (e.g., used after a reset case)
 */

/**
 * @typedef {Object} Action
 * @property {string} type - The action type ('ADD', 'SUBTRACT', 'RESET')
 */

/**
 * Reducer function that updates the state of a tally counter based on the dispatched action.
 *
 * @function
 * @param {State} [state={ count: 0 }] - The current state of the counter
 * @param {Action} action - The action to process
 * @returns {State} The new state after applying the action
 */

export function tallyReducer(state = { count: 0 }, action) {

  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1 };

    case 'SUBTRACT':
      return { count: state.count - 1 };

    case 'RESET':
      return { 
        count: 0 ,
        comment: 'Count reset to zero'
      };

    default:
      return state;
  };

};
