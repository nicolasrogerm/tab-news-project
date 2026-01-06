// resumidamente, um test runner é um código que roda códigos (códigos javascript nesse caso)
// a função necessita de dois argumentos para funcionar
// o primeiro parâmetro é uma String que contém o nome do teste.
const calculadora = require("../models/calculadora");

test("2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("100 + 5 deveria retornar 105", () => {
  const resultado = calculadora.somar(100, 5);
  expect(resultado).toBe(105);
});

test("somar batata + 100 deveria retornar 'Erro; ", () => {
  const resultado = calculadora.somar("batata", 100);
  expect(resultado).toBe("Erro");
});

test("somar 100 + batata deveria retornar Erro", () => {
  const resultado = calculadora.somar(100, "batata");
  expect(resultado).toBe("Erro");
});

test("somar 100 + batata deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar(100, "batata");
  expect(resultado).toBe("Erro");
});

test("passar somente um ou não passar nenhum argumento deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar();
  expect(resultado).toBe("Erro");
});
