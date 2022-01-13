//* Funcion Flecha *  12-01-2022
// Puede o no devolver un valor
/*
funcion normal
function sumar(num1, num2) {
	//operaciones o codigo a ejecutar
	return num1 + num2;
}


*/
let num1 = parseInt(prompt("Numero 1: "));
let num2 = parseInt(prompt("Numero 2: "));

const sumar = (num1, num2) => {
	return num1 + num2;
};
let suma = sumar(num1, num2);

document.writeln(`La suma de ${num1} y ${num2} es ${suma}`);
