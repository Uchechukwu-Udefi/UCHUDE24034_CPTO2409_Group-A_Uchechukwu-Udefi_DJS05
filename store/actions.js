/**
 * @typedef {Object} State
 * @property {number} value - The current counter value
 */

/**
 * @typedef {Object} Action
 * @property {string} type - The type of action ('ADD', 'SUBTRACT', 'RESET')
 */

/**
 * Creates an action.
 * 
 * @function
 * @returns {Action} The action object with type 'ADD', 'SUBTRACT', 'RESET'.
 */

export const add = () => ({ type: 'ADD' });
export const subtract = () => ({ type: 'SUBTRACT' });
export const reset = () => ({ type: 'RESET' });
