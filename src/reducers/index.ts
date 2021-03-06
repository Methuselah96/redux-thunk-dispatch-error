import type { Action } from 'redux';

const counter = (state = 0, action: Action<unknown>) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export default counter;
