import { useState, useEffect } from 'react'

export const useLocalStorage = (name, initialTasks) => {
   const [localState, setLocalState] = useState(() => {
       const tasks = JSON.parse(localStorage.getItem(name)) || initialTasks
       return tasks
   })

    useEffect(() => {
       localStorage.setItem(name, JSON.stringify(localState))
    }, [localState])

    return [localState, setLocalState]

}

//export const sortList = (state = []) => state.sort(({ isDone }, { isDone: seconIsDone }) => {
//     if (isDone > seconIsDone) return 1;
//     else if (isDone < seconIsDone) return -1;
//     else return 0;
// });
