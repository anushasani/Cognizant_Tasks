import React from "react";
import TodoItem from "./TodoItem";

function TodoList({
  tasks,
  toggleComplete,
  startEditTask,
  editingTaskId,
  editText,
  setEditText,
  saveEditTask,
  deleteTask,
}) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          startEditTask={startEditTask}
          editingTaskId={editingTaskId}
          editText={editText}
          setEditText={setEditText}
          saveEditTask={saveEditTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
