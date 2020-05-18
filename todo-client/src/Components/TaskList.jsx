import React, {useContext} from 'react'
import {TodoContext} from '../contexts/TodoContext'
import Task from './Task'
import styled from 'styled-components'
const StyledList = styled.ul`
  padding: 20px 0;
  margin: auto;
  display: block;
  width: 500px;
  box-sizing: border-box;
`
const TodoList = () =>{
    const { tasks } = useContext(TodoContext)
    return  (
        <StyledList>
            { tasks.map( task => (
                <Task key={task.id} task={task} />
            ))
            }
        </StyledList>
    ) 
}
export default TodoList
