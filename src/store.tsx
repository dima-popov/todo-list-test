import { createStore } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

let list:[number, any][];

if (window.localStorage.getItem('todoList') !== null && window.localStorage.getItem('todoList') !== undefined) {
  list = JSON.parse(window.localStorage.getItem('todoList'));
} else {
  list = [
  ];
}

function counterReducer(state = { inputValue: '', listValue: list }, action:any) {
  switch (action.type) {
    case 'input/update':
      return { ...state, inputValue: action.payload };
    case 'list/delete':
      return {
        inputValue: state.inputValue,
        listValue: [...state.listValue.filter((e) => e[1] !== action.payload)],
      };
    case 'list/add':
      return {
        inputValue: '',
        listValue: [
          ...state.listValue,
          [Date.now(), {
            text: state.inputValue || '------',
            ready: false,
            id: uuidv4(),
            date: `${new Date().toDateString()}, ${new Date().toTimeString()}`,
          }],

        ],
      };
    case 'list/update':
      return { inputValue: state.inputValue, listValue: [...state.listValue] };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

store.subscribe(() => {
  window.localStorage.setItem('todoList', JSON.stringify(store.getState().listValue));
});

export default store;
