"use client";

import { useState, useEffect } from "react";
import { createTask, getTasks, updateTask, deleteTask } from "./actions";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "", dueDate: "" });

  useEffect(() => {
    async function fetchTasks() {
      const data = await getTasks();
      setTasks(data);
    }
    fetchTasks();
  }, []);

  async function handleAddTask() {
    if (!newTask.title || !newTask.description || !newTask.dueDate) {
      return alert("All fields are required!");
    }
    const task = await createTask(newTask);
    setTasks([task, ...tasks]); // Update UI
    setNewTask({ title: "", description: "", dueDate: "" });
  }

  async function handleToggleComplete(id, completed) {
    const updatedTask = await updateTask(id, { completed: !completed });
    setTasks(tasks.map(task => task._id === id ? updatedTask : task));
  }

  async function handleDelete(id) {
    await deleteTask(id);
    setTasks(tasks.filter(task => task._id !== id));
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

      {/* Add Task Form */}
      <div className="flex flex-col gap-4 mb-4">
        <input
          type="text"
          placeholder="Task title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="border p-2"
          required
        />
        <textarea
          placeholder="Task description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          className="border p-2"
          required
        ></textarea>
        <input
          type="date"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
          className="border p-2"
          required
        />
        <button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2">Add Task</button>
      </div>

      {/* Task List */}
      <ul>
        {tasks.map((task) => (
          <li key={task._id} className="flex justify-between p-2 border-b">
            <div>
              <h3 className={task.completed ? "line-through font-bold" : "font-bold"}>{task.title}</h3>
              <p>{task.description}</p>
              <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            </div>
            <div>
              <button onClick={() => handleToggleComplete(task._id, task.completed)} className="text-green-500 mr-2">
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => handleDelete(task._id)} className="text-red-500">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
