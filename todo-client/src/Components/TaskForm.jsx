import React, { useContext, useState} from 'react';
import { TodoContext } from '../contexts/TodoContext'
const TaskForm = () => {
    const { dispatch } = useContext(TodoContext)
    const [text, setText] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch({ type: 'ADD_TASK', task: text})
        setText('')
    }
    const handleChange = (e) =>{
        setText(e.target.value)
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='New task' 
                value={text}
                onChange={handleChange}
                required />
        
        </form>
    );
}
 
export default TaskForm;