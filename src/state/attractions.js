import {database} from '../firebase';

const SET = 'attractions/SET'

const INITIAL_STATE = {
    attractions: []
}

const set = (attractions) => {
    return {
        type: SET,
        attractions
    }
}

export const init = () => (dispatch) => {
    database.ref('/attractions')
        .on('value', (snapshot) => {
            let items = snapshot.val();
            let newAttractions = [];
            for (let item in items) {
                newAttractions.push({
                    id: item,
                    category: items[item].category,
                    description: items[item].description,
                    link: items[item].link,
                    name: items[item].name,
                    timeStamp: items[item].timeStamp,
                });
            }
            dispatch(set(newAttractions))
        })
}


export default (state = INITIAL_STATE, action) => {
    console.log(state, action)
    switch (action.type) {
        case SET:
            return {
                ...state,
                attractions: action.attractions
            }
        default:
            return state
    }
}