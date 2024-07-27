import { actionTypes } from '../constants/actionTypes';

const initState = {
    todos: ['abc'],
};

export const todoReducer = (state = initState, action) => {
    switch (action?.type) {
        case actionTypes.addTodo:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case actionTypes.deleteTodo:
            return {
                ...state,
                todos: state.todos.filter((_item, index) => index !== action.payload),
            };
        default:
            return state;
    }
};
