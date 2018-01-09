import * as actionType from './ActionType';

export const addCount = (score) => ({
  type: actionType.ADD_COUNT,
  payload: score
});

export const addName = (username) => ({
  type: actionType.ADD_NAME,
  payload: username
});