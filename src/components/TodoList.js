import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/todos/todos-actions';
import { selectVisibleTodos } from '../store/todos/todos-selectors';
import { selectActiveFilter } from '../store/filters/filters-selectors';

export const TodoList = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.title}>
          <input
            type='checkbox'
            checked={todo.complete}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />{' '}
          {todo.title}{' '}
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
    </ul>
  );
};
