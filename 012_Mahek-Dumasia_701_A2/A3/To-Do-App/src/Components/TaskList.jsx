// src/TaskList.jsx
function TaskList({ tasks, toggleComplete, deleteTask }) {
  if (tasks.length === 0) {
    return <p>No tasks yet. Add one above!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <span
            className={`task-text ${task.completed ? 'completed' : ''}`}
            onClick={() => toggleComplete(task.id)}
          >
            {task.text}
          </span>
          <button
            className="delete-btn"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;