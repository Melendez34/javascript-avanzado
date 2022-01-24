const { sumar } = require("./calculadora");
const { restar } = require("./calculadora");
//Prueba unitaria
// describe("Pruebas en el componente calculadora", () => {
// 	test("Prueba funcion sumar", () => {
// 		expect(sumar(3, 4)).toBe(7);
// 	});
// });

describe("Prueba en componente calculadora", () => {
	test("Prueba funcion restar", () => {
		expect(restar(30, 10)).toBe(20);
	});
	test("Prueba funcion sumar", () => {
		expect(sumar(3, 4)).toBe(7);
	});
});
