// src/hooks/useTodoState.js
import { useState, useEffect } from 'react';

export default function useTodoState(initialValue = []) {
  const [todos, setTodos] = useState(initialValue);
  
  // LocalStorageからデータをロード
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);
  
  // TODOが変更されたらLocalStorageを更新
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  // 新しいTODOを追加
  const addTodo = (text) => {
    if (text.trim() !== '') {
      setTodos([...todos, {
        id: Date.now(),
        text,
        completed: false
      }]);
      return true;
    }
    return false;
  };
  
  // TODOを削除
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  // TODOの完了状態を切り替え
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  // TODOを編集
  const editTodo = (id, newText) => {
    if (newText.trim() !== '') {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, text: newText } : todo
        )
      );
      return true;
    }
    return false;
  };
  
  // フィルタリングされたTODOを取得
  const getFilteredTodos = (filter) => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };
  
  // 残りのTODO数を取得
  const getRemainingCount = () => {
    return todos.filter(todo => !todo.completed).length;
  };
  
  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
    getFilteredTodos,
    getRemainingCount
  };
}