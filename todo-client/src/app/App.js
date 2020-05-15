import React from 'react';
import { TodoProvider } from '../contexts/TodoContext'
import TaskList from '../Components/TaskList'
function App() {
  return (
    <TodoProvider>
      <TaskList />
    </TodoProvider>
  );
}

export default App;
