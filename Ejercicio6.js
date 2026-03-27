console.log("--- a) filter(): Filtrar números pares ---");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter() guarda el número SOLO si la condición da true (el resto da 0)
const numerosPares = numeros.filter(num => num % 2 === 0);

console.log("Array original:", numeros);
console.log("Solo los pares:", numerosPares);


console.log("\n--- b) map(): Transformar array de estudiantes ---");
const estudiantes = [
    { nombre: "Ana", edad: 22, calificacion: 8 },
    { nombre: "Beto", edad: 26, calificacion: 9 },
    { nombre: "Carlos", edad: 24, calificacion: 7 },
    { nombre: "Diana", edad: 28, calificacion: 10 }
];

// map() recorre cada estudiante y devuelve un nuevo objeto solo con nombre y edad.
const nombresYEdades = estudiantes.map(est => ({ nombre: est.nombre, edad: est.edad }));

console.log("Array transformado:");
console.log(nombresYEdades);


console.log("\n--- c) find(): Encontrar al primero que cumpla la condición ---");
// Reutilizamos el array de estudiantes anterior
const primerMayorDe25 = estudiantes.find(est => est.edad > 25);

console.log("Primer estudiante mayor de 25 años:", primerMayorDe25);


console.log("\n--- d) reduce(): Reducir todo a un solo valor (Suma) ---");
const puntos = [100, 50, 200, 10];

// reduce() recibe un acumulador (total) y el elemento actual (valor).
// El ", 0" al final indica que el acumulador empieza en cero.
const sumaTotal = puntos.reduce((total, valor) => total + valor, 0);

console.log("Puntos por nivel:", puntos);
console.log("Suma total de puntos:", sumaTotal);