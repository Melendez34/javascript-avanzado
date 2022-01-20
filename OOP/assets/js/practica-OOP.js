/**
 * Crear una clase carro, el carro va a tener los atributos: marca, color, modelo, velocidad y NumeroPuertas.
Debe tener los métodos: acelerar(), frenar(), reversa().

Debe tener un método llamado toString() que muestre los datos del auto y la velocidad actual.

Cáda vez que se use el método acelerar, se aumentará uno en velocidad, cada vez que se use el método reversa se restará 1.
(la velocidad puede ser negativa). Al usar el método frenar, se fijará la velocidad en 0.
 * 
 */

class Carro {
	marca;
	color;
	modelo;
	velocidad;
	numeroPuertas;
	constructor(marca, color, modelo, velocidad, numeroPuertas) {
		this.marca = marca;
		this.color = color;
		this.modelo = modelo;
		this.velocidad = velocidad;
		this.numeroPuertas = numeroPuertas;
	}
	get getMarca() {
		return this.marca;
	}
	get getColor() {
		return this.color;
	}
	get getModelo() {
		return this.modelo;
	}
	get getVelocidad() {
		return this.velocidad;
	}
	get getNumeroPuertas() {
		return this.numeroPuertas;
	}
	set setVelocidad(velocidad) {
		this.velocidad = velocidad;
	}
	acelerar() {
		this.velocidad++;
	}

	frenar() {
		this.velocidad = 0;
	}
	reversa() {
		this.velocidad--;
	}
	toString() {
		document.write(
			` <h3> El carro es: ${this.marca} y es de color: ${this.color}, modelo: ${this.modelo}, numero de puertas: ${this.numeroPuertas} y su velocidad es: ${this.velocidad} </h3>`
		);
	}
}

const carro1 = new Carro("Volvo", "Azul", "2023", 0, 4);

carro1.toString();
carro1.reversa();
carro1.toString();
carro1.reversa();
carro1.toString();
carro1.frenar();
carro1.toString();
carro1.acelerar();
carro1.toString();
carro1.acelerar();
carro1.toString();
carro1.acelerar();
carro1.toString();
carro1.acelerar();
carro1.toString();
