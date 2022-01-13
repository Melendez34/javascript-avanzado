/*
Crear un arreglo con 20 números. 
Mostrar en HTML la suma de dichos 
números y el promedio.
 */

let num = [
	4, 3, 90, 59, 20, 34, 55, 88, 24, 28, 101, 22, 45, 200, 21, 99, 77, 60, 91, 33,
];
document.writeln(" El arreglo es: " + num + "<br>");

let dato = 0;

for (let i = 0; i < num.length; i++) {
	dato = dato + num[i];
	//console.log(dato);
}

document.writeln(" La suma de todos los datos en el arreglo: " + dato + "<br>");

let promedio = dato / num.length;

document.writeln("El promedio es: " + promedio + "<br>");
