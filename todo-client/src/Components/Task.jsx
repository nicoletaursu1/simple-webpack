import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext'
import styled from 'styled-components'

const TodoListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid #cfcfcf;
  border-radius: 2px;
  box-sizing: border-box;
  &:not(:last-child){
    margin-bottom: 15px
  }
  & > *:not(:last-child){
    margin-right: 10px
  }

`
const StyledButton = styled.i`
    font-size: 18px;
    cursor: pointer;
    color: indianred;
`
const StyledCheckmark = styled.i`
    font-size: 18px;
    cursor: pointer;
    color: #418042;
    &.not_done{
    color: #a5a5a5;
    }
`
const StyledText = styled.span`
    flex: 1;
    font: 14px/16px Arial, sans-serif;
    color:  #1f1213;
`
const StyledDate = styled.span`
    font: 14px/16px Arial, sans-serif;
    font-size: 11px;
    color: #a5a5a5;
`
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
            <StyledCheckmark className="fas fa-check" ></StyledCheckmark>
            <StyledText onClick={ handleClick }>{ task.text }</StyledText>
            <StyledDate>{ new Date(task.date).toLocaleDateString(...localeDateOptions) }</StyledDate>
            <StyledButton onClick = {() => dispatch({ type: 'REMOVE_TASK', id: task.id})}
                          className="far fa-trash-alt">
            </StyledButton>
        </TodoListItem>
    );
}

export default Task;