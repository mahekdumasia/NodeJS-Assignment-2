// src/TaskInput.jsx
function TaskInput({ input, setInput, addTask }) {
  return (
    <div className="input-container">
      <input
        type="text"
        className="todo-input"
        placeholder="Enter a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add-btn" onClick={addTask}>
        Add
      </button>
    </div>
  );
}

export default TaskInput;