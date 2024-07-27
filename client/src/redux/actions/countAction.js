import { actionTypes } from '../constants/actionTypes';

export const increaseCount = (data) => {
    return {
        type: actionTypes.increaseCount,
        payload: data,
    };
};

export const decreaseCount = (data) => {
    return {
        type: actionTypes.decreaseCount,
        payload: data,
    };
};
