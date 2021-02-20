import { SET_MOUNTH, SET_DAY } from '../actions/const';

const initialState = {
    labels: ["Oct 02", "", "", "", "", "Oct 09", "", "", "", "Oct 17", "", "", "", "", "Oct 24", "", "", "", "Oct 31", "", ""],
    data: [{ x: 0, y: 2.8 },
    { x: 1, y: 2.9 },
    { x: 2, y: 3.3 },
    { x: 3, y: 3.0 },
    { x: 4, y: 2.1 },

    { x: 5, y: 2.1 },
    { x: 6, y: 2.3 },
    { x: 7, y: 2.8 },
    { x: 8, y: 3.2 },
    { x: 9, y: 3.6 },

    { x: 10, y: 3.9 },
    { x: 11, y: 4.1 },
    { x: 12, y: 5 },
    { x: 13, y: 6 },
    { x: 14, y: 7 },

    { x: 15, y: 7 },
    { x: 16, y: 6 },
    { x: 17, y: 5.8 },
    { x: 18, y: 6 },
    { x: 19, y: 6.5 },
    { x: 20, y: 6 },

    { x: 21, y: 10 }],
    specialString: 'k'
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOUNTH:
            return {
                ...state, ...action.payload
            }

        case SET_DAY:
            return {
                ...state, ...action.payload
            }

        default:
            return state
    }

};

export default reducers;