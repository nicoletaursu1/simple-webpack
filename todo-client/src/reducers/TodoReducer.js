export const TodoReducer = (state, action) =>{
    switch (action.type){
        // case 'GET_TASKS':
        //     const localTasks = localStorage.getItem('app')
        //     return localTasks ? JSON.parse(localTasks) : []
        case 'ADD_TASK':
            return [...state, {
                isDone: 0,
                text: action.task.text,
                date: Date.now(),
                id: Date.now() + Math.random() * 1000
            }
        ]
        case 'REMOVE_TASK':
            return state.filter(task => task.id !== action.id)
        default: 
            return state
    }
}
