import React from 'react';
import TodoContextProvider from '../contexts/TodoContext'
import TaskList from '../Components/TaskList'
import TaskForm from '../Components/TaskForm'
function App() {
  return (
    <TodoContextProvider>
      <TaskForm />
      <TaskList />
    </TodoContextProvider>
  );
}

export default App;
