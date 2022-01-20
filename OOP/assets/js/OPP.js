/**
 * Programacion Orientada a Objetos 19-02-2022
 * Clases, molde que nos permite crear objetos
 */
class animal {
	nombre = "Desconocido";
	especie = "Desconocida";
	constructor(nombre, especie) {
		this.nombre = nombre;
		this.especie = especie;
	}
	//get y set
	get getNombre() {
		return this.nombre;
	}
	set setNombre(nombre) {
		this.nombre = nombre;
	}
	get getEspecie() {
		return this.especie;
	}
	set setEspecie(especie) {
		this.especie = especie;
	}
	// Métodos == función
	presentar() {
		document.write(`Hola soy ${this.especie} y me llamo ${this.nombre} <br>`);
	}
	cambiarNombre(newName) {
		this.nombre = newName;
		let mensaje = ` Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} `;
		return mensaje;
	}
	// Métodos Estaticos
	// Pertenece solo en la clase y no se hereda al resto de los objetos creados
	static saludar() {
		return console.log("Hola soy un método estatico");
	}
}

/**
 * Heredar los atributos y los metodos de las clase que estan utilizando
 * Intanciar = hacer una copia, o creacion de un objeto determinado
 * Creamos un nuevo objeto:
 */

//creamos el objeto personaje1
const personaje1 = new animal("Scooby", "Perro");
//mandamos a llamar al objeto en consola
console.log(personaje1);

const personaje2 = new animal("Garfield", "Gato");
console.log(personaje2);
const personaje3 = new animal("Gato con Botas", "Gato");
console.log(personaje3);

personaje1.presentar();
console.log(personaje1.nombre);
// por que el return de la funcion cambiar nombre regresa un mensaje se debe de mandar a imprimir con document
document.write(personaje1.cambiarNombre("Scrappy"));
console.log(personaje1.nombre);
personaje1.presentar();
// utilizacion de get y set
console.log(personaje2.getNombre);
personaje2.setNombre = "Don Gato";
console.log(personaje2.getNombre);
