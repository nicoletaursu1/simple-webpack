import React, {useContext} from 'react'
import {TodoContext} from '../contexts/TodoContext'
import Task from './Task'

const TodoList = () =>{
    const { todos } = useContext(TodoContext)
    return (
        <ul>
            { todos.map( task => (
                <Task key={task.id} task={task} />
            ))
            }
        </ul>
    )
}
export default TodoList
