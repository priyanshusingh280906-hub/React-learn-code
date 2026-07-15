import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, toggleComplete, deleteTodo } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const checkbox = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`group flex items-center gap-4 rounded-2xl border border-white/15 backdrop-blur-md px-5 py-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
        todo.completed
          ? "bg-green-500/20"
          : "bg-white/10 hover:bg-white/15"
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={checkbox}
        className="w-5 h-5 accent-cyan-400 cursor-pointer"
      />

      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        className={`flex-1 bg-transparent outline-none rounded-lg px-2 py-1 text-black transition-all duration-300 ${
          isTodoEditable
            ? "border border-cyan-400 bg-white/5"
            : "border border-transparent"
        } ${
          todo.completed
            ? "line-through text-gray-700"
            : "text-black"
        }`}
      />

      <button
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
          todo.completed
            ? "bg-gray-600/50 cursor-not-allowed"
            : "bg-cyan-500 hover:bg-cyan-400 hover:scale-110 active:scale-95"
        }`}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="w-10 h-10 rounded-xl flex items-center justify-center bg-red-500 hover:bg-red-400 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;