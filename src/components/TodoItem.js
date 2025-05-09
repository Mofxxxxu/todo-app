// src/components/TodoItem.js
import React, { useState } from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editTodo(todo.id, editText)) {
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between p-3 border border-gray-200 rounded mb-2">
      {isEditing ? (
        <div className="flex items-center flex-grow mr-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-grow p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <button
            onClick={handleEdit}
            className="ml-2 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            保存
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="ml-2 px-2 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            キャンセル
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="mr-2"
            />
            <span 
              className={`${todo.completed ? 'line-through text-gray-500' : ''}`}
              onDoubleClick={() => setIsEditing(true)}
            >
              {todo.text}
            </span>
          </div>
          <div>
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 hover:text-blue-700 mr-2"
            >
              編集
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              削除
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;