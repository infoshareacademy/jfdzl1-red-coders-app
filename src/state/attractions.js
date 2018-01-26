import {database} from '../firebase';

const SET = 'attractions/SET'
const SORT_ASC = 'attractions/SORT_ASC'

const INITIAL_STATE = {
  attractions: [],
  sortAttraction: {
    asc: true
  } 
}

const set = (attractions) => {
  return {
    type: SET,
    attractions
  }
}

export const toggleSort = () => {
  return {
    type: SORT_ASC
  }
}

export const init = () => (dispatch) => {
  database.ref('/attractions')
    .on('value', (snapshot) => {
      let items = snapshot.val();
      let newAttractions = [];
      for (let item in items) {
        const { category, description, link, imgLink, name, timeStamp } = items[item];
        newAttractions.push({
          id: item,
          category,
          description,
          link,
          imgLink,
          name,
          timeStamp
        });
      }
      dispatch(set(newAttractions))
    })
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET:
      return {
        ...state,
        attractions: action.attractions
      }
    case SORT_ASC:
      return {
        ...state,
        sortAttraction: {
          asc: !state.sortAttraction.asc
        }
      }
    default:
      return state
  }
}
