import React from 'react';
import { createTodo, deleteTodo, completeTodo } from './redux/store';
import { useSelector, useDispatch } from 'react-redux';
import './styles/App.scss';

function App() {
  return (
    <div className='App'>
      <h2>React-Redux Todo List</h2>
      <CreateTodo />
      <TodoList />
    </div>
  );
}

//Component CreateTodo
const CreateTodo = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(e.target.title.value));
    e.target.reset();
  };
  return (
    <form className='inputs' onSubmit={handleSubmit}>
      <input type='text' name='title' placeholder='Create new todo' />
      <input type='submit' value='Create' />
    </form>
  );
};

//Component TodoList
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

export default App;
