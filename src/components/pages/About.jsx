// A simple to-do list application for the command line.

// An array to hold our to-do items. Each item is an object.
let todoList = [];

// A function to add a new to-do item.
function addTodo(task) {
  // We'll give each task a unique ID and a status.
  const newItem = {
    id: todoList.length + 1,
    task: task,
    isCompleted: false,
  };
  todoList.push(newItem);
  console.log(`Task "${task}" has been added. ID: ${newItem.id}`);
}

// A function to display all to-do items.
function viewTodos() {
  if (todoList.length === 0) {
    console.log("Your to-do list is empty! ✅");
    return;
  }
  console.log("\n--- Your To-Do List ---");
  todoList.forEach((item) => {
    const status = item.isCompleted ? "✅ (Completed)" : "⏳ (Pending)";
    console.log(`ID: ${item.id} | Task: ${item.task} | Status: ${status}`);
  });
  console.log("-----------------------");
}

// A function to mark an item as completed.
function completeTodo(id) {
  const item = todoList.find((todo) => todo.id === id);
  if (item) {
    item.isCompleted = true;
    console.log(`Task ID ${id} has been marked as completed. 🎉`);
  } else {
    console.log(`Error: Task with ID ${id} not found.`);
  }
}

// A function to remove a to-do item.
function removeTodo(id) {
  const initialLength = todoList.length;
  todoList = todoList.filter((todo) => todo.id !== id);
  if (todoList.length < initialLength) {
    console.log(`Task ID ${id} has been removed. 🗑️`);
  } else {
    console.log(`Error: Task with ID ${id} not found.`);
  }
}

// Let's add a few tasks to start.
addTodo("Learn JavaScript basics");
addTodo("Build a small project");
addTodo("Read about ES6 features");

// Now let's view the list.
viewTodos();

// Let's complete one of the tasks.
completeTodo(2);

// Let's view the list again to see the change.
viewTodos();

// Let's remove a task.
removeTodo(1);

// And view the final list.
viewTodos();

console.log("\nApplication finished. 👋");
