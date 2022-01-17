let $titulo = document.querySelector("#titulo");
let $texto = document.querySelector(".texto");

$texto.id = "texto";
//$texto.style = "color:#00ff00; background: #000000; font-size: 30px";

$texto.className = "bg-purple h3";
// si escribimos otra vez sobreescribe lo que tenga class=" "
// $texto.className = "h3";
// con diferencia de classList que agrega la clase si sobreescribirla
$texto.classList.add("text-center");
//removemos el la clase que queremos sin sobreescribir todas las clases
$texto.classList.remove("bg-purple");
