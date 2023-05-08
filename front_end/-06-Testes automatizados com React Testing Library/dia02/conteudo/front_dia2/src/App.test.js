import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

// eslint-disable-next-line no-unused-expressions
const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0

// test('quando o número aleatório é par, a função retorna `true`', () => {
//   expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
// });

test("#divisivelPorDois", () => {
  // testando se a função foi chamada
  const retornaNumeroAleatorio = jest.fn().mockReturnValue(2);

  expect(divisivelPorDois()).toBe(true);
});