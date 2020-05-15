import React, {createContext, useReducer} from 'react'
import TodoReducer from '../reducers/TodoReducer'
import {useLocalStorage} from '../utils/LocalStorage' 
const initialTodos = [
    {isDone: 0, text: 'Learn swear words in norwegian', date: '15.05.2020', id: '1241'},
    {isDone: 1, text: 'Disturb the neighbours with electric guitar ', date: '15.05.2020', id: '1241'}
]

export const TodoContext = createContext()

export const TodoProvider = (props) => {
    const [tasks] = useReducer(TodoReducer, initialTodos)

    return (
        <TodoContext.Provider value={tasks}>
            {props.children}
        </TodoContext.Provider>
    )
}