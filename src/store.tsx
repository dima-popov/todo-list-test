import { createStore } from '@reduxjs/toolkit';

function counterReducer(state = { inputValue: 0 }, action:any) {
  switch (action.type) {
    case 'input/update':
      return { inputValue: action.payload };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

// store.subscribe(() => console.log(store.getState()));

// store.dispatch({type: 'input/update', payload: "todoText"});

export { store };
