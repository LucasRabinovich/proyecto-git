console.log("--- a) Convertir a Arrow Function ---");

// Usando los template del ejercicio anterior
const saludar = nombre => `Hola, ${nombre}!`;
console.log(saludar("Lucas"));


console.log("\n--- b) Cuadrado de un número ---");
//como hay un solo parametro no hace falta los parentesis
// Como es una sola línea matemática, no hace falta escribir la palabra "return".
const cuadrado = numero => numero * numero;

console.log("El cuadrado de 5 es:", cuadrado(5));
console.log("El cuadrado de 8 es:", cuadrado(8));


console.log("\n--- c) El mayor de dos números ---");

const obtenerMayor = (a, b) => a > b ? a : b;

console.log("Entre 10 y 25, el mayor es:", obtenerMayor(10, 25));
console.log("Entre 100 y 42, el mayor es:", obtenerMayor(100, 42));


console.log("\n--- d) Array al cuadrado con map() (Modo Ninja) ---");
const numeros = [2, 4, 6, 8];

const cuadrarArray = arr => arr.map(n => n * n);

console.log("Array original:", numeros);
console.log("Array al cuadrado:", cuadrarArray(numeros));