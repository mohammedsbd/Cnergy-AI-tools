import React, { useState } from "react";

function HabitTracker() {
  const [habit, setHabit] = useState("");
  const [record, setRecord] = useState([]);

  const addHabit = () => {
    if (!habit.trim()) return;
    setRecord((r) => [...r, { name: habit.trim(), done: false }]);
    setHabit("");
  };

  const toggle = (i) => {
    setRecord((r) =>
      r.map((h, idx) => (idx === i ? { ...h, done: !h.done } : h))
    );
  };

  return (
    <div>
      <h2>Habit Tracker</h2>
      <input
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="New habit"
      />
      <button onClick={addHabit}>Add</button>
      <ul>
        {record.map((h, i) => (
          <li
            key={i}
            onClick={() => toggle(i)}
            style={{
              textDecoration: h.done ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {h.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitTracker;
