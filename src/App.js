import { CreateTodo } from './components/CreateTodo';
import { TodoList } from './components/TodoList';
import { Filters } from './components/Filters';

import './styles/App.scss';

export default function App() {
  return (
    <div className='App'>
      <h1>React-Redux Todo</h1>
      <CreateTodo />
      <Filters />
      <TodoList />
    </div>
  );
}
