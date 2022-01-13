/*
Buenos dias 6 - 11
Buenas tardes 12 - 18
Buenas noches 19 - 23
Dejame dormir 0 - 5

*/
let hora = parseInt(prompt("Que hora es?: "));

if (hora >= 6 && hora <= 11) {
	document.writeln("Buenos dias!");
} else if (hora >= 12 && hora <= 18) {
	document.writeln("Buena Tarde!");
} else if (hora >= 19 && hora <= 23) {
	document.writeln("Buena Noche!");
} else if (hora == 24 || (hora >= 0 && hora <= 5)) {
	document.writeln("Dejame Dormir!");
} else {
	document.writeln("Dato incorrecto.");
}
