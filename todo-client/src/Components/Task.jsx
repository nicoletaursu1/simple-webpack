import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext'

const Task = ({task}) => {
    const { dispatch } = useContext(TodoContext)
    return ( 
        <li onClick = {() => dispatch({ type: 'REMOVE_TASK', id: task.id})}>
            <div>{ task.text }</div>
        </li>
    );
}

export default Task;