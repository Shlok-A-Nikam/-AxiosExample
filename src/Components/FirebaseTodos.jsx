import React, { useState, useEffect } from "react";
import { database } from "../environment"; // Firebase configuration file
import { ref, push, onValue, remove } from "firebase/database";

const FirebaseTodos = () => {
  const [input, setInput] = useState(""); // Input for new todos
  const [todos, setTodos] = useState([]); // State for storing todos

  // Fetch Todos from Firebase
  useEffect(() => {
    const todosRef = ref(database, "todos"); // Reference to 'todos' node in Firebase
    onValue(todosRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Fetched Data from Firebase:", data);

      // Convert data to array
      if (data) {
        const todosArray = Object.entries(data).map(([id, value]) => ({
          id, // Firebase unique ID
          ...value, // Spread the rest of the data (e.g., { text: "todo text" })
        }));
        setTodos(todosArray); // Update state with processed todos array
      } else {
        setTodos([]); // No data in Firebase, set empty todos array
      }
    });
  }, []);

  // Add Todo to Firebase
  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      alert("Please enter a valid todo!");
      return;
    }

    const todosRef = ref(database, "todos");
    push(todosRef, { text: input }) // Push new todo with 'text'
      .then(() => setInput("")) // Clear input after successful addition
      .catch((error) => console.error("Error adding todo:", error));
  };

  // Delete Todo from Firebase
  const deleteTodo = (id) => {
    const todoRef = ref(database, `todos/${id}`);
    remove(todoRef)
      .then(() => console.log(`Todo with ID ${id} deleted`))
      .catch((error) => console.error("Error deleting todo:", error));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>Firebase Todo App</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter your todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: "10px", width: "70%" }}
        />
        <button
          type="submit"
          className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
        >
          Add Todo
        </button>
      </form>
      <ul style={{ marginTop: "20px", listStyleType: "none", padding: 0 }}>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                marginBottom: "10px",
                padding: "10px",
                backgroundColor: "#f5f5f5",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {todo.text}
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 10px",
                }}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No todos found. Add one!</p>
        )}
      </ul>
    </div>
  );
};

export default FirebaseTodos;

/**
 * 
 */