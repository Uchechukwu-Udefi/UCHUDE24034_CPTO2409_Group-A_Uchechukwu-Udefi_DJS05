//initial state verification set value to 0 and result log to console.
const initial = {
  value: 0,
};

/**
 * @callback Action
 * @param {State}
 * @returns {State}
 */

/**
*@callback Update
*@param {Action}
*/

/**
*@typedef {Object} store
*@props {Update} update
*/

const createStore = () => {
  let state = initial

  const update = (action) => {
    if (typeof action !== 'function') {
      throw new Error('Action must be a function');
    }
  }
  return {
    update: ()
  }
}