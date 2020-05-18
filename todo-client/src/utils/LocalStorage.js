import { useState } from 'react' 

export const useLocalStorage = (name) => {

    const [item, setState] = useState(name ? JSON.parse(localStorage.getItem(name)) || [] : [])

    const setItem = (newItem) => {
        localStorage.setItem(name, JSON.stringify(newItem))
        setState(newItem)
    }

    return [item, setItem]

}

//export const sortList = (state = []) => state.sort(({ isDone }, { isDone: seconIsDone }) => {
//     if (isDone > seconIsDone) return 1;
//     else if (isDone < seconIsDone) return -1;
//     else return 0;
// });
