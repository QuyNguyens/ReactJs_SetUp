import { actionTypes } from '../constants/actionTypes';

const initState = {
    count: 1,
};

export const countReducer = (state = initState, action) => {
    switch (action?.type) {
        case actionTypes.increaseCount:
            return {
                ...state,
                count: state.count + action.payload,
            };
        case actionTypes.decreaseCount:
            return {
                ...state,
                count: state.count - action.payload,
            };
        default:
            return state;
    }
};
