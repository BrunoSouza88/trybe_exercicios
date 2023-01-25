import { render, screen } from '@testing-library/react';
import Component from '../components/Component';

test('Verificar se existe botão', () => {
  render(<Component />);
  const btns = screen.getAllByRole("button");

  expect(btns).toHaveLength(2);
})

test('Verificar se existe botão Enviar', () => {
  render(<Component />);
  const btnSend = screen.getByTestId("id-send")

  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveValue("Enviar")
})

test('Verificar se o botão com label Enviar existe', () => {
  render(<Component />);
  const labelEnviar = screen.getByText("Enviar");

  expect(labelEnviar).toBeInTheDocument();
})


test ('Verificar se span existe', () => {
  render(<Component />);
  const tagSpan = screen.getByTestId("olokobicho");

  expect(tagSpan).toBeInTheDocument();
})