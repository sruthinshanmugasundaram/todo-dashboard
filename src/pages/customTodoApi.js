// customTodoApi.js

// Sample data
const todos = [];

// Simulated asynchronous fetch function
const fetchTodosFromApi = () => {
  return new Promise((resolve, reject) => {
    // Simulate network delay with setTimeout
    setTimeout(() => {
      // Resolve with mock todos data
      resolve(todos);
    }, 1000); // Simulate 1 second delay
  });
};

// Function to create a new todo item
const createTodo = (newTodoData) => {
  return new Promise((resolve, reject) => {
    // Simulate server-side validation
    if (!newTodoData.title || !newTodoData.description) {
      reject("Title and description are required.");
      return;
    }

    // Generate a unique ID for the new todo item
    const id = Date.now();

    // Create the new todo object
    const newTodo = {
      id,
      title: newTodoData.title,
      description: newTodoData.description,
      completed: false, // You can set the initial status to false
    };

    // Add the new todo to the list
    todos.push(newTodo);

    // Resolve the promise with the newly created todo
    resolve(newTodo);
  });
};

// Function to update an existing todo item
const updateTodo = (id, updatedTodo) => {
  return new Promise((resolve, reject) => {
    // Find the todo item by ID
    const todoIndex = todos.findIndex(todo => todo.id === id);

    // If todo item is not found, reject with an error message
    if (todoIndex === -1) {
      reject("Todo not found.");
      return;
    }

    // Update the todo item with the new data
    todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };

    // Resolve with the updated todo
    resolve(todos[todoIndex]);
  });
};

// Function to delete a todo item by ID
const deleteTodo = (id) => {
  return new Promise((resolve, reject) => {
    // Find the index of the todo item with the given ID
    const todoIndex = todos.findIndex(todo => todo.id === id);

    // If todo item is not found, reject with an error message
    if (todoIndex === -1) {
      reject("Todo not found.");
      return;
    }

    // Remove the todo item from the todos array
    todos.splice(todoIndex, 1);

    // Resolve with a success message
    resolve("Todo deleted successfully.");
  });
};

// Export the todos array and all the CRUD functions
export { todos, fetchTodosFromApi, createTodo, updateTodo, deleteTodo };
