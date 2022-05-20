import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTodo, deleteTodo, completeTodo } from './redux/store';

function App() {
  return (
    <div className='App'>
      <h1>React-Redux Todo List</h1>
      <CreateTodo/>
      <TodoList/>
    </div>
  );
}

const TodoList = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.title}>
          <input
            type='checkbox'
            checked={todo.complete}
            onChange={() => dispatch(completeTodo(todo.id))}
          />{' '}
          {todo.title}
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const CreateTodo = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(e.target.title.value));
    e.target.reset();
  };
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder='Create new todo'/>
      <input type="submit" value="Create" />
    </form>
  )
}

export default App;
