import React, { useState, useEffect, useRef } from "react";

// Main component for the task board
const KanbanBoard = () => {
  const [columns, setColumns] = useState({
    todo: {
      title: "To Do",
      tasks: [
        { id: "1", content: "Set up project" },
        { id: "2", content: "Create components" },
        { id: "3", content: "Define state" },
      ],
    },
    "in-progress": {
      title: "In Progress",
      tasks: [{ id: "4", content: "Implement drag-and-drop" }],
    },
    done: {
      title: "Done",
      tasks: [{ id: "5", content: "Initial layout" }],
    },
  });

  const [draggedItem, setDraggedItem] = useState(null);
  const [sourceColumnId, setSourceColumnId] = useState(null);

  const handleDragStart = (e, taskId, columnId) => {
    setDraggedItem(taskId);
    setSourceColumnId(columnId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, destinationColumnId) => {
    e.preventDefault();
    if (!draggedItem || sourceColumnId === destinationColumnId) {
      return;
    }

    const sourceColumn = columns[sourceColumnId];
    const destinationColumn = columns[destinationColumnId];
    const draggedTask = sourceColumn.tasks.find(
      (task) => task.id === draggedItem
    );

    if (!draggedTask) return;

    // Remove the task from the source column
    const newSourceTasks = sourceColumn.tasks.filter(
      (task) => task.id !== draggedItem
    );

    // Add the task to the destination column
    const newDestinationTasks = [...destinationColumn.tasks, draggedTask];

    setColumns({
      ...columns,
      [sourceColumnId]: { ...sourceColumn, tasks: newSourceTasks },
      [destinationColumnId]: {
        ...destinationColumn,
        tasks: newDestinationTasks,
      },
    });

    // Reset drag state
    setDraggedItem(null);
    setSourceColumnId(null);
  };

  return (
    <div className="kanban-board-container">
      <h2>Kanban Task Board</h2>
      <div className="kanban-board">
        {Object.entries(columns).map(([columnId, column]) => (
          <div
            key={columnId}
            className="kanban-column"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, columnId)}
          >
            <h3>{column.title}</h3>
            <div className="task-list">
              {column.tasks.map((task) => (
                <div
                  key={task.id}
                  className="task-card"
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id, columnId)}
                >
                  {task.content}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
