import { createSlice } from '@reduxjs/toolkit';
import { fetchAllUser } from '../actions/todoAction';

const initialState = {
    todos: ['abc'],
    isLoading: false,
    isError: false,
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodoAction: (state, action) => {
            state.todos = [...state.todos, action.payload];
        },
        deleteTodoAction: (state, action) => {
            state.todos = state.todos.filter((_item, index) => index !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAllUser.fulfilled, (state, action) => {
            console.log('full: ', action.payload );
            state.isLoading = false;
            state.todos = action.payload;
        });
        builder.addCase(fetchAllUser.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
            state.payload = [];
        });
    },
});

export const { addTodoAction, deleteTodoAction } = todoSlice.actions;

export default todoSlice.reducer;
