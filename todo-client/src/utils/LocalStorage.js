import { useState } from 'react' 
export const useLocalStorage = (name) => {

    const [item, setState] = useState(name ? JSON.parse(localStorage.getItem(name)) || [] : [])

    const setItem = (newItem) => {
        localStorage.setItem(name, JSON.stringify(newItem))
        setState(newItem)
    }

    return [item, setItem]


    // get state() {
    //     this._state = this.name ? JSON.parse(localStorage.getItem(this.name)) : null;

    //     return this._state;
    // }

    // set state(newState) {
    //     this._state = this.setState(this.sortList(newState));
    // }

    // setState = (state) => {
    //     localStorage.setItem(this.name, JSON.stringify(state));

    //     return state;
    // };
}

//export const sortList = (state = []) => state.sort(({ isDone }, { isDone: seconIsDone }) => {
//     if (isDone > seconIsDone) return 1;
//     else if (isDone < seconIsDone) return -1;
//     else return 0;
// });
