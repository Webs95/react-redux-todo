import { COMPLETE_TODO, ADD_TODO, DELETE_TODO } from './todos-const';

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          completed: false,
        },
      ];
    }
    case DELETE_TODO: {
      return state.filter((todo) => todo.id !== action.id);
    }
    case COMPLETE_TODO: {
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    }
    default: {
      return state;
    }
  }
};
