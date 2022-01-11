let titulo = document.getElementById("titulo");

function cambiarNombre() {
	let nombre = prompt("Escribe tu nombre: ");

	titulo.textContent = "Bienvenido " + nombre + "!";
}
