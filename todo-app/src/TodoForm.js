import React from "react";

function TodoForm({ newTask, setNewTask, addTask, error }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
  };

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className={`input ${error ? "error-border" : ""}`}
        />
        <button type="submit">Add</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default TodoForm;
