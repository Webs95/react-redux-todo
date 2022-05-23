import ReactDOM from 'react-dom';
import { cofigureStore } from './store';
import { Root } from './Root';

const store = cofigureStore();

const rootElement = document.getElementById('root');
ReactDOM.render(<Root store={store} />, rootElement);
