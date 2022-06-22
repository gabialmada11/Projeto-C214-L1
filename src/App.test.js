import { render, screen, fireEvent, getByLabelText, getByTestId } from '@testing-library/react';
import App from './App';

test('Verificação da existência da Calculadora Simples', () => {
  const { getByText} = render(<App />);
  const ElementoCalculadoraSimples = screen.getByText(/Calculadora Simples/i);
  expect(ElementoCalculadoraSimples).toBeInTheDocument();
});

test('Verificação do botão AC', () => {
  const { getByText } = render(<App />);
  const elementoBotaoAC = screen.getByText(/AC/i);
  expect(elementoBotaoAC).toBeInTheDocument();
});

test('Verificação do elemento 9', () => {
  const { getByText } = render(<App />);
  const elementoNumero9 = screen.getByText(/9/i);
  expect(elementoNumero9).toBeInTheDocument();
});

test('Verificação do elemento 8', () => {
  const { getByText } = render(<App />);
  const elementoNumero8 = screen.getByText(/8/i);
  expect(elementoNumero8).toBeInTheDocument();
});

test('Verificação do elemento 7', () => {
  const { getByText } = render(<App />);
  const elementoNumero7 = screen.getByText(/7/i);
  expect(elementoNumero7).toBeInTheDocument();
});

test('Verificação do elemento 6', () => {
  const { getByText } = render(<App />);
  const elementoNumero6 = screen.getByText(/6/i);
  expect(elementoNumero6).toBeInTheDocument();
});

test('Verificação do elemento 5', () => {
  const { getByText } = render(<App />);
  const elementoNumero5 = screen.getByText(/5/i);
  expect(elementoNumero5).toBeInTheDocument();
});

test('Verificação do elemento 4', () => {
  const { getByText } = render(<App />);
  const elementoNumero4 = screen.getByText(/4/i);
  expect(elementoNumero4).toBeInTheDocument();
});

test('Verificação do elemento 3', () => {
  const { getByText } = render(<App />);
  const elementoNumero3 = screen.getByText(/3/i);
  expect(elementoNumero3).toBeInTheDocument();
});

test('Verificação do elemento 2', () => {
  const { getByText } = render(<App />);
  const elementoNumero2 = screen.getByText(/2/i);
  expect(elementoNumero2).toBeInTheDocument();
});

test('Verificação do elemento 1', () => {
  const { getByText } = render(<App />);
  const elementoNumero1 = screen.getByText(/1/i);
  expect(elementoNumero1).toBeInTheDocument();
});

test('Verificação do elemento (', () => {
  const { getByText } = render(<App />);
  const elementoParenteseEsquerdo = screen.getByText('(');
  expect(elementoParenteseEsquerdo).toBeInTheDocument();
});

test('Verificação do elemento )', () => {
  const { getByText } = render(<App />);
  const elementoParenteseDireito = screen.getByText(')');
  expect(elementoParenteseDireito).toBeInTheDocument();
});

test('Verificação do elemento /', () => {
  const { getByText } = render(<App />);
  const elementoDivisao = screen.getByText('/');
  expect(elementoDivisao).toBeInTheDocument();
});

test('Verificação do elemento *', () => {
  const { getByText } = render(<App />);
  const elementoMultiplicacao = screen.getByText(/ * /i);
  expect(elementoMultiplicacao).toBeInTheDocument();
});

test('Verificação do elemento -', () => {
  const { getByText } = render(<App />);
  const elementoMenos = screen.getByText('-');
  expect(elementoMenos).toBeInTheDocument();
});

test('Verificação do elemento +', () => {
  const { getByText } = render(<App />);
  const elementoMais = screen.getByText('+');
  expect(elementoMais).toBeInTheDocument();
});

test('Verificação do elemento .', () => {
  const { getByText } = render(<App />);
  const elementoPonto = screen.getByText('.');
  expect(elementoPonto).toBeInTheDocument();
});

test('Verificação do botão C', () => {
  const { getByText } = render(<App />);
  const elementoC = screen.getByText('C');
  expect(elementoC).toBeInTheDocument();
});

test('Verificação do elemento =', () => {
  const { getByText } = render(<App />);
  const elementoIgual = screen.getByText('=');
  expect(elementoIgual).toBeInTheDocument();
});
