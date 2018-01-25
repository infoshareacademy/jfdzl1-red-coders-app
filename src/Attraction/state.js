import { database} from "../firebase";

const POPULATE_ATTRACTION = 'POPULATE_ATTRACTION';

export const getAttraction = (id) => dispatch => {
    database.ref(`/attractions/${id}`)
        .on('value', snapshot => {
            dispatch(pupulateAttraction(snapshot.val()));
        })
};

const pupulateAttraction = data => ({
    type: POPULATE_ATTRACTION,
    data
});

const INITIAL_STATE = {
    data: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POPULATE_ATTRACTION:
            return {
                ...state,
                data: action.data
            };
        default:
            return state
    }

}