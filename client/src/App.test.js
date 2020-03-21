import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import NavBar from './components/Navbar';

test('renders without crashing', () => {
  render(<App />);
});

test('First Test', () => {
  const test = render(<App />)
  test.getByTestId(/MainApp/i)
});

test("Navbar", () => {
  render(<NavBar />);
});

test('should have text world cup', ()=>{
  const {getByText} = render(<App />);
  getByText(/world cup/i);
});
