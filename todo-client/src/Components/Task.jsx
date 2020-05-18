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
  
`
const Task = ({task}) => {
    const { dispatch } = useContext(TodoContext)
    return ( 
        <TodoListItem onClick = {() => dispatch({ type: 'REMOVE_TASK', id: task.id})}>
            <div>{ task.text }</div>
        </TodoListItem>
    );
}

export default Task;