import { useState } from 'react'

export const useLocalStorage = (name, initialTasks) => {
   
   const [localState] = useState(() => {
    const tasks = JSON.parse(localStorage.getItem(name)) || initialTasks
    return tasks
   })

    return localState

}

export const sortList = (state = []) => state.sort(({ isDone }, { isDone: seconIsDone }) => {
    if (isDone > seconIsDone) return 1;
    else if (isDone < seconIsDone) return -1;
    else return 0;
});
