/**Eventos en Javascript DOM
 * 17-01-2022
 */

let $titulo = document.querySelector("#titulo");
let $mensaje = document.querySelector("#mensaje");
let $btnMensaje = document.querySelector("#btnMensaje");
//seleccionamos en este caso todas las etiquetas span
let $spanError = document.querySelector("span");

$btnMensaje.addEventListener("click", () => {
	console.log("No me Presiones!");
});

//funcion anonima dentro del EventListener
$mensaje.addEventListener("keyup", (e) => {
	// e -> un evento definido dentro de javascript.
	// al hacer un log desplegamos las propiedades del objeto
	//console.log(e);
	//console.log(e.target.value);

	if (e.target.value.length < 3) {
		$spanError.classList.remove("hide");
		$spanError.classList.add("error");
	} else {
		$spanError.classList.add("hide");
		$spanError.classList.remove("error");
	}
});

//funcion que puede mandarse en el parametro del listener
function mostrarConsole() {
	console.log("Escribiste algo");
}
