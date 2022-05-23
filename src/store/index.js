import { createStore } from 'redux';

import { rootReducer } from './root-reducer';

export const cofigureStore = () => {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
