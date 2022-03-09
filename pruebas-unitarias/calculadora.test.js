const { sumar, restar, multiplicar, dividir } = require("./calculadora");
//Prueba unitaria
// describe("Pruebas en el componente calculadora", () => {
// 	test("Prueba funcion sumar", () => {
// 		expect(sumar(3, 4)).toBe(7);
// 	});
// });

describe("Prueba en componente calculadora", () => {
	test("Prueba funcion sumar", () => {
		expect(sumar(4, 6)).toBe(10);
	});
	test("Prueba funcion restar", () => {
		expect(restar(30, 10)).toBe(20);
	});
	test("Prueba funcion multiplicar", () => {
		expect(multiplicar(30, 10)).toBe(300);
	});
	test("Prueba funcion dividir", () => {
		expect(dividir(30, 10)).toBe(3);
	});
});
