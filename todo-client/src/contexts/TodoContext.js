import React, { createContext, useReducer } from 'react'
import { TodoReducer } from '../reducers/TodoReducer'
import { useLocalStorage } from '../utils/LocalStorage'

export const TodoContext = createContext({ tasks: [] })

const TodoContextProvider = (props) => {
    const [localState, setLocalState] = useLocalStorage('app', [])
    const [tasks, dispatch] = useReducer(TodoReducer, localState)
    
    console.log(tasks)
    
    return (
        <TodoContext.Provider value={{ tasks, dispatch }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider