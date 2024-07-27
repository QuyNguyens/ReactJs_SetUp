import axios from 'axios';
import { actionTypes } from '../constants/actionTypes';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addTodo = (data) => {
    return {
        type: actionTypes.addTodo,
        payload: data,
    };
};

export const fetchAllUser = createAsyncThunk('todos/fetchAllUser', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json());
    console.log('action: ', response);
    return response;
});

export const addTodoAsync = () => async (dispatch) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    dispatch(addTodo(res.data.title));
};

export const deleteTodo = (data) => {
    return {
        type: actionTypes.deleteTodo,
        payload: data,
    };
};
