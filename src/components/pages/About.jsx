import React, { useState } from "react";

function KanbanBoard() {
  const [tasks, setTasks] = useState({
    todo: ["Task A", "Task B"],
    inProgress: [],
    done: [],
  });

  const move = (from, to, idx) => {
    const item = tasks[from][idx];
    setTasks((t) => {
      const newFrom = t[from].filter((_, i) => i !== idx);
      const newTo = [...t[to], item];
      return { ...t, [from]: newFrom, [to]: newTo };
    });
  };

  const Column = ({ title, listKey }) => (
    <div
      style={{
        margin: "8px",
        border: "1px solid #ccc",
        padding: "8px",
        width: "30%",
      }}
    >
      <h3>{title}</h3>
      <ul>
        {tasks[listKey].map((task, i) => (
          <li key={i}>
            {task}
            <div>
              {listKey !== "todo" && (
                <button onClick={() => move(listKey, "todo", i)}>◀</button>
              )}
              {listKey !== "done" && (
                <button onClick={() => move(listKey, "done", i)}>▶</button>
              )}
              {listKey === "todo" && (
                <button onClick={() => move("todo", "inProgress", i)}>→</button>
              )}
              {listKey === "inProgress" && (
                <button onClick={() => move("inProgress", "done", i)}>→</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <h2>Kanban Board</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Column title="To Do" listKey="todo" />
        <Column title="In Progress" listKey="inProgress" />
        <Column title="Done" listKey="done" />
      </div>
    </div>
  );
}

export default KanbanBoard;
