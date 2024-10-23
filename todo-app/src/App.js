import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const addTask = (taskText) => {
    if (taskText.trim() === "") {
      setError("Task cannot be empty");
      return;
    }
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: taskText }),
    })
      .then((response) => response.json())
      .then((task) => setTasks([...tasks, task]));
    setNewTask("");
    setError("");
  };

  const toggleComplete = (id) => {
    const task = tasks.find((t) => t.id === id);
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed }),
    }).then(() => {
      setTasks(
        tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
      );
    });
  };

  const deleteTask = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    }).then(() => setTasks(tasks.filter((t) => t.id !== id)));
  };

  const startEditTask = (task) => {
    setEditingTaskId(task.id);
    setEditText(task.text);
  };

  const saveEditTask = (id, updatedText) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: updatedText }),
    }).then(() => {
      setTasks(
        tasks.map((t) => (t.id === id ? { ...t, text: updatedText } : t))
      );
      setEditingTaskId(null);
      setEditText("");
    });
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoForm
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
        error={error}
      />
      <TodoList
        tasks={tasks}
        toggleComplete={toggleComplete}
        startEditTask={startEditTask}
        editingTaskId={editingTaskId}
        editText={editText}
        setEditText={setEditText}
        saveEditTask={saveEditTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
