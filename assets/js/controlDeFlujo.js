// Control de flujo 12-01-2022

// let edad = 18;
// let tieneINE = true;

// if (edad >= 18 && tieneINE == true) {
// 	console.log("Puedes entrar! ");
// } else {
// 	console.log("No puedes entrar ");
// }

// && para comparar que ambas sean verdaderas
// || para comparar que ambas sean verdaderas

// Operador ternario

// (Condicion) ? <Se ejecuta este codigo si es True> : <Se ejecuta si es false la condicion>

// let fNac = 18;

// fNac >= 18
// 	? console.log("Eres mayor de edad ")
// 	: fNac <= 6
// 	? console.log("Eres un bebe")
// 	: console.log(" Eres menor de Edad");

// let preguntaEdad = `Tengo  ${fNac} años y soy ${
// 	fNac >= 18 ? "Mayor" : "Menor"
// } edad `;

// console.log(preguntaEdad);

// let dia = parseInt(prompt("Que dia es hoy?"));

// if (dia === 0) {
// 	console.log("Domingo");
// } else if (dia === 1) {
// 	console.log("Lunes");
// } else if (dia === 2) {
// 	console.log("Martes");
// } else if (dia === 3) {
// 	console.log("Miercoles");
// } else if (dia === 4) {
// 	console.log("Jueves");
// } else if (dia === 5) {
// 	console.log("Viernes");
// } else if (dia === 6) {
// 	console.log("Sabado");
// } else {
// 	console.log("Error ");
// }

// switch (dia) {
// 	case 0:
// 		console.log("Domingo");
// 		break;
// 	case 1:
// 		console.log("Lunes");
// 		break;
// 	case 2:
// 		console.log("Martes");
// 		break;
// 	case 3:
// 		console.log("Miercoles");
// 		break;
// 	case 4:
// 		console.log("Jueves");
// 		break;
// 	default:
// 		console.log("Error");
// 		break;
// }

let descuento;
let cuponDescuento = prompt("tipo de cupon: ");

switch (cuponDescuento) {
	case "Bronce":
		descuento = 5;
		break;
	case "Plata":
		descuento = 10;
		break;
	case "Oro":
		descuento = 15;
		break;
	default:
		console.log("Cupón Erróneo!");
		break;
}
console.log(descuento);
