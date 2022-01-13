/*
 * 
Escribir un programa que detecte el cupón 
que tiene el usuario:

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después 
el cupón
-El programa debe mostrar el precio original 
y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" 
en caso de que sea un cupón equivocado 
 */
let precio = parseInt(prompt("Precio del producto: "));
let cuponDescuento = prompt("tipo de cupon: ");
let descuento;

const calcular = (precio, descuento) => {
	let res = 0;
	res = precio * (1 - descuento / 100);
	return res;
};

switch (cuponDescuento) {
	case "Bronce":
		descuento = 5;
		document.writeln(
			"<h2> Precio con descuento de: " + calcular(precio, descuento) + "</h2>"
		);
		break;
	case "Plata":
		descuento = 10;
		document.writeln(
			"<h2> Precio con descuento de: " + calcular(precio, descuento) + "</h2>"
		);
		break;
	case "Oro":
		descuento = 20;
		document.writeln(
			"<h2> Precio con descuento de: " + calcular(precio, descuento) + "</h2>"
		);
		break;
	case "Platino":
		descuento = 25;
		document.writeln(
			"<h2> Precio con descuento de: " + calcular(precio, descuento) + "</h2>"
		);
		break;
	default:
		document.writeln("<h2> Cupón Erróneo! </h2>");
		break;
}

console.log(descuento);
