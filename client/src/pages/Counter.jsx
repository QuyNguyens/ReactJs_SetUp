import { store } from '@/redux/store.js';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Button } from '@/style_component/index.jsx';
import { increment, decrement } from '@/redux/reducers/counterSlice.js';
import { decreaseCount, increaseCount } from '@/redux/actions/countAction';
import { addTodo, deleteTodo, fetchAllUser } from '@/redux/actions/todoAction';
import { useState } from 'react';
import { addTodoAction, deleteTodoAction } from '@/redux/reducers/todoSlice';

function Counter() {
    const dispatch = useDispatch();
    const todostate = useSelector((state) => state.todos);
    const count = useSelector((state) => state.counter.count);
    const { todos, isError, isLoading } = todostate;
    const [value, setValue] = useState();

    console.log('todos: ', todos)
    const handleIncreare = () => {
        dispatch(increment(10));
    };

    const handleDecreare = () => {
        dispatch(decrement(5));
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleAddTodo = () => {
        dispatch(addTodoAction(value));
        setValue('');
    };

    const handleDeleteTodo = (index) => {
        dispatch(deleteTodoAction(index));
    };

    const handleGetAll = () => {
        dispatch(fetchAllUser());
    };

    return (
        <div>
            <h1>Redux tutorial</h1>
            <h4>{count}</h4>
            <Button $primary onClick={handleIncreare}>
                IncreaseCount
            </Button>
            <Button onClick={handleDecreare}>DecreaseCount</Button>
            <br />
            <input value={value} onChange={handleChange} style={{ border: '1px solid red' }} />
            <Button $primary onClick={handleAddTodo}>
                Add Todo
            </Button>
            <br />

            <Button $primary onClick={handleGetAll}>
                Get All
            </Button>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {todos.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.id} <b>{item.title}</b> <Button onClick={() => handleDeleteTodo(index)}>X</Button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

function mapDispatchtoProps(dispatch) {
    return {
        increaseCount: (data) => store.dispatch(increaseCount(data)),
        decreaseCount: (data) => dispatch(decreaseCount(data)),
        addTodo: (data) => dispatch(addTodo(data)),
        deleteTodo: (data) => dispatch(deleteTodo(data)),
    };
}

export default connect(mapDispatchtoProps)(Counter);
