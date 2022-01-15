/* * 14-01-2022
* Operadores Aritmeticos 
+ - * / %
*/

let operacion = 3 * 5 + (10 - 5);
console.log(operacion);

let operacion2 = 3 - (5 / 2) * 4;

console.log(operacion2);

/*
 * Operaciones relaciones
 * <, >, >=, <=, ==, ===, !=, !==
 * boolean resultado true o false
 */

/* * no incluye el numero que se compara */
console.log(7 > 7);

console.log(7 >= 7);

/** compara Valor */
console.log(7 == "7");
// Compara el valor y el tipo de dato
console.log(7 === "7");

/** Incrmeento y decremento */
// *=, += , -=, /=
let incremento = 5;

incremento += 5;
console.log(incremento);

sumar = 0;

sumar--;
sumar--;
console.log(sumar);

/* * ++variable = preincremento, primero modifica el valor y ya despues hace uso de la variable
 * variable++ = postincremento, usando la variable despues se hace el incremento
 */

let num = 5;

console.log(num++);
console.log(num);

//ciclos anidados
for (let i = 0; i < 4; i++) {
	console.log("ciclo padre");
	for (let j = 0; j < 4; j++) {
		console.log("ciclo hijo");
	}
}
