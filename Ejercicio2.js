console.log("\n--- a) Frutas (Añadir al principio y al final) ---");
const frutas = ["Manzana", "Banana", "Naranja", "Pera", "Uva"];
console.log("Array original:", frutas);

frutas.unshift("Kiwi");
frutas.push("Mango");   
console.log("Array actualizado:", frutas);


console.log("\n--- b) El doble de los números con bucle for ---");
const numeros = [1, 2, 3, 4, 5];
const dobles = []; // array vacío para guardar los resultados

for (let i = 0; i < numeros.length; i++) {
    let resultado = numeros[i] * 2;
    dobles.push(resultado); // resultado en el nuevo array
}
console.log("Números originales:", numeros);
console.log("Números al doble:", dobles);


console.log("\n--- c) Combinar arrays con concat() ---");
const colores1 = ["Rojo", "Verde", "Azul"];
const colores2 = ["Amarillo", "Violeta"];

const todosLosColores = colores1.concat(colores2);
console.log("Colores combinados:", todosLosColores);


console.log("\n--- d) Eliminar extremos SIN modificar el original ---");
const elementos = ["A", "B", "C", "D", "E", "F"];

// Usamos el método slice() para recortar una copia
// El 1 indica que empezamos desde el segundo elemento (índice 1).
// El -1 indica que frenamos un lugar antes del final.
const elementosRecortados = elementos.slice(1, -1);

console.log("Array original (sigue intacto):", elementos);
console.log("Array recortado:", elementosRecortados);