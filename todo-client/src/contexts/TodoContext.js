import React, { createContext, useReducer, useEffect, useRef} from 'react'
import { TodoReducer } from '../reducers/TodoReducer'
import { useLocalStorage } from '../utils/LocalStorage'

export const TodoContext = createContext({ tasks: [] })

const TodoContextProvider = (props) => {

    let localState = useLocalStorage('app', [])
    const [tasks, dispatch] = useReducer(TodoReducer, localState)
    let localStateRef = useRef(localState)
    useEffect(() => {
        localStorage.setItem('app', JSON.stringify(tasks))
        localStateRef.current = tasks
    },[tasks])
    
    console.log(tasks)
    
    return (
        <TodoContext.Provider value={{ tasks, dispatch }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider