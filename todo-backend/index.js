import express from "express";
import cors from "cors";
const app = express();
const tasks = []; // Can be replaced by MongoDB later(didnot do this part)

app.use(cors());
app.use(express.json());

// POST /tasks: Add a new task
app.post("/tasks", (req, res) => {
  const task = {
    id: Date.now(),
    text: req.body.text,
    completed: false,
  };
  tasks.push(task);
  res.status(201).json(task);
});

// GET /tasks: Retrieve all tasks
app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

// PUT /tasks/:id: Update a task by ID
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id == req.params.id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  task.text = req.body.text || task.text;
  task.completed =
    req.body.completed !== undefined ? req.body.completed : task.completed;
  res.status(200).json(task);
});

// DELETE /tasks/:id: Delete a task by ID
app.delete("/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex((t) => t.id == req.params.id);
  if (taskIndex === -1)
    return res.status(404).json({ error: "Task not found" });
  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

app.listen(3000, () => console.log("Server running on port 3000"));
