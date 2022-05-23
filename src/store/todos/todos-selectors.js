export const selectAllTodos = (state) => state.todos;

export const selectActiveTodos = (state) =>
  state.todos.filter((todo) => todo.complete === false);

export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all': {
      return state.todos;
    }
    case 'active': {
      return state.todos.filter((todo) => !todo.complete);
    }
    case 'completed': {
      return state.todos.filter((todo) => todo.complete);
    }
    default: {
      return state.todos;
    }
  }
};
