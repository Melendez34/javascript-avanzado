let varaibleSincrona;

varaibleSincrona = 10 * 3;

console.log(varaibleSincrona);

// Código Asincrono
let variableAsincrona;

setTimeout(() => {
	variableAsincrona = 10 * 3;
}, 3000);

console.log(variableAsincrona);
