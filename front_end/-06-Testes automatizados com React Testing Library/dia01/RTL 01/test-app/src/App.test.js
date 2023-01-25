import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Testar se tem label Email', () => {
  render(<App />);
  const labelInput = screen.getByLabelText("E-mail");

  expect(labelInput).toBeInTheDocument();
})