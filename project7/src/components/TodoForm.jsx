import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo.trim()) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form
      onSubmit={add}
      className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-3 shadow-lg"
    >
      <input
        type="text"
        placeholder="What do you need to do today?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="flex-1 bg-transparent text-black placeholder-gray-300 px-4 py-3 rounded-xl outline-none border border-transparent focus:border-cyan-400 focus:bg-white/5 transition-all duration-300"
      />

      <button
        type="submit"
        className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:scale-95 transition-all duration-300 shadow-lg shadow-cyan-500/30"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;