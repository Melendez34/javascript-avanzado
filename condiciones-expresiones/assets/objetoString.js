/**Objeto String */
//declaracion de cadenas String
let cadena1 = "HOLA MUNDO";

console.log(cadena1);

let cadena2 = new String("Adios");
console.log(cadena2);

//includes()

console.log(cadena2.toLowerCase().includes("a"));
// * convierte a minusculas o mayusculas
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());

//Cohersion - Javascript convierte en automatico un tipo de dato a otro
console.log(cadena1.toLowerCase());

/**ejercicio
 * Recibir una palabra y la regresamos invertida
 *
 */

let palabra = "Hola Mundo";

let arreglo = palabra.split("");
console.log(arreglo);
console.log(arreglo.reverse().join(""));

function invertirPalabra(cadena) {
	//Separa el string en un arreglo con cada caracter en la cadena como un elemento del string
	let arreglo = cadena.split("");
	//reverse devuelve la Cadena invertida o un arreglo invirtiendo sus indices.
	arreglo.reverse();
	//asignamos a una nueva variable el string que ha sido invertido en una nueva String
	return arreglo.join(" ");
}

//aplicacion de la funcion Ejercicio

let nombre = prompt("Escribe una oracion: ");

document.write(
	"<p> Invirtiendo la palabra/oracion ingresada se obtiene: <i>" +
		invertirPalabra(nombre) +
		"</i></p>"
);

console.log(typeof invertirPalabra(nombre));
