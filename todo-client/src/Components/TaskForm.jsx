import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext'
import { StyledForm, StyledInput, StyledAddButton } from '../styles/styled-components'


const TaskForm = () => {
    const { dispatch } = useContext(TodoContext)
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_TASK', task: text })
        setText('')
    }
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput
                type='text'
                placeholder='Please add a task'
                value={text}
                onChange={handleChange}
                required />
            <StyledAddButton>Add</StyledAddButton>
        </StyledForm>
    );
}

export default TaskForm;