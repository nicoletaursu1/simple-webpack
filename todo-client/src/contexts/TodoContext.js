import React, { createContext, useEffect, useReducer } from 'react'
import { TodoReducer } from '../reducers/TodoReducer'
import useLocalStorage from '../utils/LocalStorage'

export const TodoContext = createContext()
//const initialTasks = {isDone: 0, text: 'Code', date: '12.12.12', id: 123}
const TodoContextProvider = (props) => {
    
    const [tasks, dispatch] = useReducer(TodoReducer, [])
    console.log(tasks)
    useEffect(() => {
        localStorage.setItem('app', JSON.stringify(tasks))
    }, [tasks])

    return (
        <TodoContext.Provider value={{ tasks, dispatch }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider