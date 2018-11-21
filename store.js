import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';

import rootReducers from './reducers';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') middlewares.push(logger);

export default (initialState = undefined) => createStore(
  rootReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middlewares),
  ),
);
