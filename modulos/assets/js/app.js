/**Seccion donde se hace uso de las variables de calculadora.js
 *
 */
import { sumar, multiplicar, mostrarResultado } from "./calculadora.js";
let resultado = sumar(34, 23);
console.log(resultado);
let resultadoMultiplicar = multiplicar(12, 46);
mostrarResultado("multiplicacion", 12, 46, resultadoMultiplicar);

test("12 y 5 deberia dar 17", () => {
	let result = sumar(12, 5);
	expect(result).toBe(17);
});
