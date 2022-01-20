let $btnGato = document.querySelector("#btnGato");
let $btnPerrito = document.querySelector("#btnPerrito");

$btnGato.addEventListener("click", () => {
	fetch("https://api.thecatapi.com/v1/images/search")
		.then((Response) => Response.json())
		.then((data) => {
			let imagenGatito = document.createElement("img");
			imagenGatito.src = data[0].url;
			document.body.appendChild(imagenGatito);
		});
});

$btnPerrito.addEventListener("click", () => {
	fetch("https://dog.ceo/api/breeds/image/random")
		.then((resp) => resp.json())
		.then((data) => {
			let imagenPerrito = document.createElement("img");
			imagenPerrito.src = data.message;
			document.body.appendChild(imagenPerrito);
		});
});
