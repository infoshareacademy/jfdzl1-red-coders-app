import { SET_FILTER } from '../constants';

function setFilter(value) {
  return {
    type: SET_FILTER,
    filter: value
  }
}

export { setFilter };
