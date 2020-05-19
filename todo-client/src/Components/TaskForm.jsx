import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext'
import styled from 'styled-components'

const StyledForm = styled.form`
    max-width: 500px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 32px;
    box-sizing: border-box;
    & > *::first-child{
    margin-right: 20px
    }
    
`
const StyledInput = styled.input`
    width: 350px;
    appearance: none;
    border: 1px solid #cfcfcf;
    box-shadow: none;
    border-radius: 0;
    font: 14px/16px Arial, sans-serif;
    padding: 8px 12px;
    background-color: transparent;
    transition: background-color 0.3s ease;
    box-sizing: border-box;
   
`
const StyledAddButton = styled.button`
    width: auto;
    cursor: pointer;
    margin-left: 8px;
    appearance: none;
    border: 1px solid #cfcfcf;
    box-shadow: none;
    border-radius: 0;
    font: 14px/16px Arial, sans-serif;
    padding: 8px 12px;
    background-color: transparent;
    transition: background-color 0.3s ease;
    box-sizing: border-box;
    &:hover{
    background-color: #e1d8de;
    }
`
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