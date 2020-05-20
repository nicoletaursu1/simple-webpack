import React, { useContext, useMemo } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import Task from './Task'
import { StyledList, StyledText } from '../styles/styled-components'

const TodoList = () => {
    const { tasks } = useContext(TodoContext)
    const memTasks = useMemo(() => {
        return tasks.map(task => ({
            ...task
        }))
    }, [tasks])

    return (
        <>
        { memTasks.length ? 
            (
            <StyledList>
                { memTasks.map(task => (
                    <Task key={task.id} task={task} />
                ))
                }
            </StyledList>
            ) : 
            <StyledText> No tasks. Enjoy your free time! </StyledText>

        }
        </>
    )
        
}
export default TodoList
