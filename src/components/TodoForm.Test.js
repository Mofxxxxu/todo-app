// src/components/TodoForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';

test('入力フィールドとボタンが表示される', () => {
  render(<TodoForm addTodo={() => {}} />);
  
  const inputElement = screen.getByPlaceholderText(/新しいタスクを入力.../i);
  expect(inputElement).toBeInTheDocument();
  
  const buttonElement = screen.getByText(/追加/i);
  expect(buttonElement).toBeInTheDocument();
});

test('フォーム送信時にaddTodo関数が呼ばれる', () => {
  const mockAddTodo = jest.fn().mockReturnValue(true);
  render(<TodoForm addTodo={mockAddTodo} />);
  
  const inputElement = screen.getByPlaceholderText(/新しいタスクを入力.../i);
  const buttonElement = screen.getByText(/追加/i);
  
  fireEvent.change(inputElement, { target: { value: 'テストタスク' } });
  fireEvent.click(buttonElement);
  
  expect(mockAddTodo).toHaveBeenCalledWith('テストタスク');
});