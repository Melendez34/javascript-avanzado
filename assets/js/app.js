let title = document.getElementsByClassName("title");
console.log(title);
title.textContent = "Hola mundo desde Javascript";

let parrafos = document.getElementsByTagName("p");
console.log(parrafos);

/*for (let i = 0; i < parrafos.length; i++) {
	parrafos[i].textContent = "Parrafo " + i + " escrito desde Javascript.";
}*/

let email = document.getElementById("email");
let password = document.getElementById("password");

function getInformation() {
	console.log(email.value);
	console.log(password.value);
}
