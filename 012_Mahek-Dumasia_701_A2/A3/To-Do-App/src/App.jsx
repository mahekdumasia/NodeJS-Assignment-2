// src/App.jsx
import { useState } from 'react';
import './App.css'; 
import TaskInput from './Components/TaskInput'; 
import TaskList from './Components/TaskList';  

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  function addTask() {
    if (input.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput('');
  }

  function toggleComplete(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <div className="todo-container">
      <h2>My To-Do List</h2>
      
      {/* Component 1 */}
      <TaskInput 
        input={input} 
        setInput={setInput} 
        addTask={addTask} 
      />

      {/* Component 2 */}
      <TaskList 
        tasks={tasks} 
        toggleComplete={toggleComplete} 
        deleteTask={deleteTask} 
      />
    </div>
  );
}

export default App;