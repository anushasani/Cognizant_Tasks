import React from "react";

function TodoItem({
  task,
  toggleComplete,
  startEditTask,
  editingTaskId,
  editText,
  setEditText,
  saveEditTask,
  deleteTask,
}) {
  return (
    <li key={task.id} className="task-item">
      {editingTaskId === task.id ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
          />
          <button onClick={() => saveEditTask(task.id, editText)}>Save</button>
        </>
      ) : (
        <>
          <span
            className={`task-text ${task.completed ? "completed" : ""}`}
            onClick={() => toggleComplete(task.id)}
          >
            {task.text}
          </span>
          <button className="edit-button" onClick={() => startEditTask(task)}>
            Edit
          </button>
          <button className="delete-button" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
