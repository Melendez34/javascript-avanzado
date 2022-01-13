// * Arreglos Javascript

//const numeros = [5];

let numeros = new Array();

numeros = [1, 5, 4, 7, 9, 3, 19, 21, 34, 69];

//document.writeln(numeros);
//document.writeln(numeros[5]);
console.log(numeros.length);

for (let i = 0; i < numeros.length; i++) {
	const numero = numeros[i];
	document.writeln("[" + i + "]: " + numero + "<br>");
}
