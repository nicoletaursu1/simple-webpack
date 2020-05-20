import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext'
import { TodoListItem, StyledCheckmark, StyledTaskText, StyledDate,
        StyledButton } from '../styles/styled-components'


const localeDateOptions = [
    'en',
    { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' },
];

const Task = ({task}) => {
    const { dispatch } = useContext(TodoContext)
    const handleClick =()=>{
        
    }
    return ( 
        <TodoListItem>
            <StyledCheckmark isDone={task.isDone} onClick={() => dispatch({type: 'CHECK_TASK', id: task.id})} className="fas fa-check" ></StyledCheckmark>
            <StyledTaskText onClick={ handleClick }>{ task.text }</StyledTaskText>
            <StyledDate>{ new Date(task.date).toLocaleDateString(...localeDateOptions) }</StyledDate>
            <StyledButton onClick = {() => dispatch({ type: 'REMOVE_TASK', id: task.id})}
                          className="far fa-trash-alt">
            </StyledButton>
        </TodoListItem>
    );
}

export default Task;