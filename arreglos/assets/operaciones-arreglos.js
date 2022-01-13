// * Operaciones con Arreglos 12-01-2022

let numeros = new Array();

numeros = [3, 5, 27, 12, 90, 87, 34, 111];

// numeros.forEach((numero, indice) => {
// 	document.writeln(indice + "]= " + numero + "<br>");
// });

// * funcion .map
// let numeros2 = numeros.map((elemento) => {
// 	return elemento + elemento;
// });

// document.writeln("<br>" + numeros2);

// * includes()
//document.write("<h2>" + numeros.includes(3) + "</h2>");

// * filter()

// const filtrado = numeros.filter((numero) => {
// if (numero % 2 == 0) {
// 	return false;
// } else {
// 	return true;
// }
//console.log(numero % 2 == 0);
// 	if (numero >= 27) {
// 		return true;
// 	}
// });
// document.write("<h2>" + filtrado + "</h2>");

let frutas = ["mango", "uva", "piña", "mandarina", "manzana", "aguacate"];

// let frutaFiltrada = frutas.filter((fruta) => {
// if (fruta.includes("a") == true) {
// 	return true;
// }
// 	return fruta.toLowerCase().includes("a");
// });
// console.log(frutaFiltrada);
// document.write("<h2>" + frutaFiltrada + "</h2>");

// * Sort()
numbers = [9, 2, 5, 8, 1, 6, 4, 7, 3];
// forma descendente
const descOrdenado = numbers.sort((a, b) => {
	return a > b ? -1 : 1;
});
document.write("<h2>" + descOrdenado + "</h2>");

// *reverse()
document.write("<h2>" + descOrdenado.reverse() + "</h2>");

// * find()

let encontrarFruta = frutas.find((elemento) => {
	return elemento.includes("iñ");
});

document.write("<h2>" + encontrarFruta + "</h2>");
