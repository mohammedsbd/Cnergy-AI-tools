import React, { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    const newTask = { id: Date.now(), text: input, done: false };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-3">Todo List</h1>
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          className="border px-2 py-1 flex-grow"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-3 rounded"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between border p-2 rounded"
          >
            <span
              className={`flex-grow cursor-pointer ${
                task.done ? "line-through text-gray-400" : ""
              }`}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 font-bold"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
