/* --------------------------------- */
/** Repaso de Javascript OOP
 * 20-01-2022 */
/* --------------------------------- */
class Animalito {
	constructor(nombre, edad, especie, revisado) {
		this.nombre = nombre;
		this.edad = edad;
		this.especie = especie;
		this.revisado = revisado;
		this.enfermo = false;
	}
	saludar() {
		return console.log(`Hola mi nombre es ${this.nombre} `);
	}
}

class Veterinario {
	constructor() {
		this.cantidadPacientes = 0;
		this.pacientesRevisados = 0;
		this.listaPacientes = [];
	}

	agregarPaciente(paciente) {
		this.listaPacientes.push(paciente);
		this.cantidadPacientes++;
		let mensaje = `<br>Paciente agregado.`;
		return document.write(mensaje);
	}

	mostrarLista() {
		for (let i = 0; i < this.listaPacientes.length; i++) {
			document.write("<br>" + " " + this.listaPacientes[i].nombre);
		}
		document.write(`<br> Cantidad de pacientes: ${this.cantidadPacientes}`);
	}

	modificarPacienteRevisados() {
		//return document.write(mensaje);
		this.pacientesRevisados++;
	}

	revisarPaciente(paciente) {
		if (paciente.revisado == false) {
			paciente.revisado = true;
			this.modificarPacienteRevisados();
			//this.pacientesRevisados++;
			document.write(`<br> Paciente ha sido revisado`);
		} else {
			document.write(" <br>" + "Este paciente ya fue revisado");
		}
	}
	// mostrarLista() {
	// 	for (let i = 0; i < this.listaPacientes.length; i++) {
	// 		const paciente = this.listaPacientes[i];
	// 		document.write(`<br> ${paciente} revisado`);
	// 	}
	//}
}
//Objeto Veterinario from Clase Veterinario
const Veterinario1 = new Veterinario();
//Objetos creados from Clase Animalito
const Animal1 = new Animalito("Manchas", 5, "Perro", false);
const Animal2 = new Animalito("Galleta", 2, "Hamster", true);
console.log(Animal1);
console.log(Animal2);
Veterinario1.agregarPaciente(Animal1);
Veterinario1.agregarPaciente(Animal2);

console.log(Veterinario1.listaPacientes);

Veterinario1.mostrarLista();
Veterinario1.revisarPaciente(Animal1);
Veterinario1.mostrarLista();

Veterinario1.revisarPaciente(Animal1);
//Operador shortCircuit cortoCircuito
let variable = 0;
console.log(variable);
