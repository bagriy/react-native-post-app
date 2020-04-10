import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { PostReducer } from './reducers/post';

const rootReducer = combineReducers({
  post: PostReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
