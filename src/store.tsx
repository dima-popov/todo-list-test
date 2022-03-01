import { createStore } from '@reduxjs/toolkit';

let list:[number, any][];

if (window.localStorage.getItem('todoList') !== null && window.localStorage.getItem('todoList') !== undefined) {
  list = JSON.parse(window.localStorage.getItem('todoList'));
} else {
  list = [

  ];
}

function prepID(id: number = 0) {
  const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const idArr = id.toString().split('');

  const abcArr = idArr.map((elm) => abc[Number(elm)]);

  return abcArr.join('');
}

function counterReducer(state = { inputValue: '', listValue: list }, action:any) {
  switch (action.type) {
    case 'input/update':
      return { ...state, inputValue: action.payload };
    case 'list/delete':
      return { inputValue: state.inputValue, listValue: [...state.listValue.filter((e, i) => e[1] !== action.payload)] };
    case 'list/add':
      return {
        inputValue: '',
        listValue: [
          ...state.listValue,
          [Date.now(), {
            text: state.inputValue, ready: false, id: prepID(Date.now()) + state.inputValue, date: `${new Date().toDateString()}, ${new Date().toTimeString()}`,
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

store.subscribe(() => {
  window.localStorage.setItem('todoList', JSON.stringify(store.getState().listValue));
});

export { store };
