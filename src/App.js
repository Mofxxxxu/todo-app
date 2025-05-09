// src/App.js
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import useTodoState from './hooks/useTodoState';
import './App.css';

function App() {
  const { 
    todos, 
    addTodo, 
    deleteTodo, 
    toggleTodo, 
    editTodo,
    getFilteredTodos,
    getRemainingCount
  } = useTodoState([]);
  const [filter, setFilter] = useState('all');

  const filteredTodos = getFilteredTodos(filter);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4 bg-blue-500 text-white">
          <h1 className="text-2xl font-bold text-center">TODOアプリ</h1>
        </div>
        
        <div className="p-6">
          <TodoForm addTodo={addTodo} />
          
          <FilterButtons currentFilter={filter} setFilter={setFilter} />
          
          <TodoList 
            todos={filteredTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
          
          <div className="mt-4 text-sm text-gray-600 text-right">
            残りのタスク: {getRemainingCount()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;