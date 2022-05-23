import { COMPLETE_TODO, ADD_TODO, DELETE_TODO } from './todos-const';

export const addTodo = (title) => ({
    type: ADD_TODO,
    title
  });
  export const removeTodo = (id) => ({
    type: DELETE_TODO,
    id
  });
  export const toggleTodo = (id) => ({
    type: COMPLETE_TODO,
    id
  });