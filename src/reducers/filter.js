import { SET_FILTER } from '../constants';

const INITIAL_STATE = {
  filter: ''
};

const reducer = (state = INITIAL_STATE, action = { type: '', payload: null }) => {
  switch (action.type) {
    case SET_FILTER:
      return Object.assign({}, state, {
        filter: action.filter
      });
    default:
      return state;
  }
}

export default reducer;
