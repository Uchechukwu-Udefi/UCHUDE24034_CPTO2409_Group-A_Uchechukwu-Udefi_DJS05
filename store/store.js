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

//initial state verification set value to 0
const initial = {
  value: 0,
};


//create store function with initial state
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