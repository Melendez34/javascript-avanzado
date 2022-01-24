//funciones de prueba para modulos
const sumar = (num1, num2) => {
	return num1 + num2;
};
const restar = (num1, num2) => {
	return num1 - num2;
};
const multiplicar = (num1, num2) => {
	return num1 * num2;
};
const dividir = (num1, num2) => {
	return num1 / num2;
};
const mostrarResultado = (operacion, numero1, numero2, resultado) => {
	const respuesta = document.createElement("h3");
	respuesta.textContent = `La ${operacion} de ${numero1} y el ${numero2} es: ${resultado}.`;
	document.body.appendChild(respuesta);
};

module.exports = {
	sumar,
	restar,
	multiplicar,
	dividir,
};
// Escribimos export para mencionar que funciones deseeo exportar
// export { sumar, restar, multiplicar, dividir, mostrarResultado };
