import * as actionType from '../actions/ActionType';

const counterReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionType.ADD_COUNT:
      return newState = action.payload * 25;

    default:
      return state
  }
}

export default counterReducer;

