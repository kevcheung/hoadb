import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import userReducer from './ducks/userReducer';
import hoaReducer from './ducks/hoaReducer';
import favReducer from './ducks/favReducer';
import commentsReducer from './ducks/commentsReducer';

const combinedReducers = combineReducers({
  user: userReducer,
  hoa: hoaReducer,
  favorites: favReducer,
  comments: commentsReducer
});

const store = createStore(
  combinedReducers,
  applyMiddleware(promiseMiddleware())
);

export default store;
