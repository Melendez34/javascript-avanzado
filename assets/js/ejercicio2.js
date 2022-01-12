let subtitulo = document.getElementById("subtitulo");

let date = new Date();

anio.textContent = "El año actual es: " + date.getFullYear() + "!";

function calcularEdad() {
	let edad = parseInt(prompt("escribe tu edad: "));
	subtitulo.textContent = "Naciste en el año: " + (date.getFullYear() - edad) + " !";
}
