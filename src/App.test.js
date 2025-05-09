// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('アプリケーションタイトルが表示される', () => {
  render(<App />);
  const titleElement = screen.getByText(/TODOアプリ/i);
  expect(titleElement).toBeInTheDocument();
});