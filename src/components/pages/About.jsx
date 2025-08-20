import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy milk", done: false },
    { id: 2, text: "Write JSX", done: false },
  ]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks((t) => [
      ...t,
      { id: Date.now(), text: input.trim(), done: false },
    ]);
    setInput("");
  };

  const toggle = (id) => {
    setTasks((t) =>
      t.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  };

  const remove = (id) => {
    setTasks((t) => t.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h2>Todo App</h2>
      <input
        type="text"
        value={input}
        placeholder="New task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map(({ id, text, done }) => (
          <li key={id} style={{ textDecoration: done ? "line-through" : "" }}>
            <span onClick={() => toggle(id)} style={{ cursor: "pointer" }}>
              {text}
            </span>
            <button onClick={() => remove(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
