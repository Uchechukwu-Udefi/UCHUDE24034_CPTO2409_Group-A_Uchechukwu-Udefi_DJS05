// reducer.js
export function tallyReducer(state = { count: 0 }, action) {

  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1 };

    case 'SUBTRACT':
      return { count: state.count - 1 };

    case 'RESET':
      return { count: 0 };
      
    default:
      return state;
  };

};
