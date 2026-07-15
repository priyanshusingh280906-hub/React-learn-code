import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm.jsx";
import TodoItem from "./components/TodoItem.jsx";
import background from "./assets/backgroundimg.png";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), todo: todo, ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo,
      ),
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat p-6 flex items-center justify-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="w-full max-w-3xl rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-8 py-6">
            <h1 className="text-4xl font-bold text-center text-white">
              📝 My Todo List
            </h1>
            <p className="text-center text-indigo-100 mt-2">
              Stay organized and get things done.
            </p>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <TodoForm />
            </div>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {todos.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">📭</div>
                  <h2 className="text-xl font-semibold text-white">
                    No Todos Yet
                  </h2>
                  <p className="text-gray-400 mt-2">
                    Add your first task to get started.
                  </p>
                </div>
              ) : (
                todos.map((todo) => (
                  <div key={todo.id}>
                    <TodoItem todo={todo} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
