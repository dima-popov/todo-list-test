import { createStore } from '@reduxjs/toolkit';

let list:[number, any][];

if (localStorage.getItem('todoList') != undefined) {
  list = JSON.parse(localStorage.getItem('todoList'));
} else {
  list = [

  ];
}

function counterReducer(state = { inputValue: '', listValue: list }, action:any) {
  switch (action.type) {
    case 'input/update':
      return { ...state, inputValue: action.payload };
    case 'list/delete':
      return { inputValue: state.inputValue, listValue: [...state.listValue.filter((e, i) => e[1] != action.payload)] };
    case 'list/add':
      return {
        inputValue: '',
        listValue: [
          ...state.listValue,
          [Date.now(), {
            text: state.inputValue, ready: false, id: Symbol(), date: `${new Date().toDateString()}, ${new Date().toTimeString()}`,
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

// store.subscribe(() => console.log(store.getState()));

// store.dispatch({type: 'input/update', payload: "todoText"});

export { store };
