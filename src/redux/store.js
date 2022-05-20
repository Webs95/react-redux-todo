import { createStore } from 'redux';

//Create Reducer
let initValueById = 0;

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        {
          id: ++initValueById,
          title: action.title,
          complete: false,
        },
      ];
    }
    case 'DELETE_TODO': {
      return state.filter((todo) => todo.id !== action.id);
    }
    case 'COMPLETE_TODO': {
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    }
    default: {
      return state;
    }
  }
};

//Create store
export const store = createStore(todos);

//Create Actions
export const createTodo = (title) => ({
  type: 'ADD_TODO',
  title,
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id,
});

export const completeTodo = (id) => ({
  type: 'COMPLETE_TODO',
  id,
});
