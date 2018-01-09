import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userNameReducer from './userNameReducer';

const assessmentApp = combineReducers({
  counterReducer,
  userNameReducer
});

export default assessmentApp

