import { combineReducers } from 'redux';
import post from '../post/index';
import cat from '../cats/index'
const rootReducer = combineReducers({
  post,
  cat
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
