import React, {useContext} from 'react'
import {TodoContext} from '../contexts/TodoContext'

const TodoList =() =>{
    const todos =  useContext(TodoContext)

    return (
        <ul>
            {
                todos.map(task => (
                    //i'll add the Task component here when i'll make it)
                   <li key={task.id}>{task.text}</li>
                ))
            }
        </ul>
    )
}
export default TodoList