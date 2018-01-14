import { SET_FILTER } from '../constants';

const setFilter = (value) => ({
  type: SET_FILTER,
  filter: value
});

export { setFilter };
