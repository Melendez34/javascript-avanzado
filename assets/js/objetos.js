let Objeto = {
	//pares de variable y valor de esa variable
	nombre: "Omar",
	apellido: "Melendez",
};
// variables

let nombre = "Omar";
let edad = 29;
let direccion = "Lago Silverio";
let numero = 5544553344;

console.log(nombre);

let persona = {
	nombreCompleto: {
		nombre: "Omar",
		apellidoPaterno: "Melendez",
		apellidoMaterno: "Lopez",
	},
	direccion: {
		ciudad: "CDMX",
		Delegacion: "Miguel Hildago",
	},
	edad: 29,
	numero: [5544552233, 3344223311],
	sumar: function (a, b) {
		return a + b;
	},
};

let calzado = {
	color: {
		c1: "negro",
		c2: "negro",
		c3: "verde",
	},
	tipo: {
		s1: "bota",
		s2: "tenis",
		s3: "zapato",
	},
	marca: {
		m1: "timberland",
		m2: "adidas",
		m3: "nike",
		m4: "flexi",
	},
	disponibilidad: {
		d1: true,
		d2: false,
	},
};
