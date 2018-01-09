import * as actionType from '../actions/ActionType';

const userNameReducer = (state = 0, action) => {
  let newState;

  switch (action.type) {
    case actionType.ADD_NAME:
      return newState = action.payload;
    default:
      return state
  }
}

export default userNameReducer;