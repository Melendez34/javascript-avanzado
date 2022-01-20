class Pokemon {
	constructor(nombre, tipo) {
		this.nombre = nombre;
		this.tipo = tipo;
	}
	atacar() {
		return `${this.nombre}, Esta atacando!!`;
	}
}

class Pikachu extends Pokemon {
	constructor(nombre, tipo, edad) {
		super(nombre, tipo);
		this.edad = edad;
	}
	evolucionar() {
		return console.log(`${this.nombre}, está evolucionando!`);
	}
}

class Electrico extends Pikachu {
	constructor(nombre, tipo, edad, color) {
		super(nombre, tipo, edad);
		this.color = color;
	}
}

const raychu = new Electrico("Canelo", "Electrico", 3, "Cafecito");
console.log(raychu.evolucionar());

const pokemon1 = new Pikachu("Albondiga", "Electrico", 2);
console.log(pokemon1);

document.write(`${pokemon1.nombre} Utiliza impactrueno!, ${pokemon1.atacar()} `);
pokemon1.evolucionar();

const pokemon2 = new Pikachu("Charmander", "Fuego", 1);
