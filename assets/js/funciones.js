// Funciones
// Bloque de codigo reutilizable
// puede tener parametros o no

function suma(num1, num2) {
	// Operaciones o codigo a ejecutar
	console.log("Hola mundo desde funcion");
	return num1 + num2;
}
function resta(numero1, numero2) {
	document.writeln(
		`<h1>El valor de restar ${numero1} y el numero ${numero2} es: ${
			numero1 - numero2
		}</h1>`
	);
}

let numero1 = parseInt(prompt("numero1: "));
let numero2 = parseInt(prompt("numero2: "));

let res = suma(numero1, numero2);
//Template string
document.writeln(`La suma de ${numero1} y ${numero2} es ${res}`);

document.writeln(`La suma de ${numero1} y ${numero2} es: ${suma(numero1, numero2)}`);

// Concatenar
document.writeln(
	"El valor de sumar " +
		numero1 +
		" y el numero " +
		numero2 +
		" es: " +
		suma(numero1, numero2)
);
