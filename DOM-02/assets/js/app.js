/**Manipulacion del DOM 17-01-2022
 * se utiliza el $ para referencia a una variable que
 * manipula el DOM
 * no es obligatorio pero quedarian esas variables de este
 * estilo:
 * $variable =
 */

// Utilizando .getElementById()

// let titulo = document.getElementById("titulo");
// console.log(titulo.textContent);
// titulo.textContent = "Titulo escrito por JS";

// Utilizando querySelector()

let $titulo = document.querySelector("#titulo");
// console.log($titulo.textContent);

// etiquetas que se toman como referencia en querySelector
// #id, .clase, etiquetas como: <body>, <p>, etc.
// $titulo.textContent = "Título Escrito desde JS.";

// let $parrafo = document.querySelector("p");
// console.log($parrafo.textContent);

// querySelectorAll()

let parrafo = document.querySelectorAll("p");
console.log(parrafo[1].textContent);

//crear etiquetas con createElement
let subtitulo = document.createElement("h4");
subtitulo.textContent = "Este es un Subtitulo desde JS.";
//Insertar elemento en el body con body.append()
//document.body.append(subtitulo);
$titulo.insertAdjacentElement("afterend", subtitulo);
$titulo.remove();
// hacemos referencia al contenido
let $contenido = document.querySelector("#contenido");
//console.log($contenido.textContent);
//console.log(($contenido.innerHTML = "<br> Hola Mundo"));
//console.log(($contenido.outerHTML = " Hola Mundo"));

//creamos un parrafo y lo insertamos en el HTML
let contenidoParrafo = document.createElement("p");
contenidoParrafo.textContent = "Texto de mi nuevo parrafo.";
$contenido.appendChild(contenidoParrafo);
