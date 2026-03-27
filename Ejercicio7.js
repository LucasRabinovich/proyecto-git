console.log("--- a) Función con argumentos infinitos (Rest Operator) ---");

const sumarTodos = (...numeros) => {
    return numeros.reduce((total, num) => total + num, 0);
};

console.log("Suma de 3 números (1, 2, 3):", sumarTodos(1, 2, 3));
console.log("Suma de 6 números (10, 20, 30, 40, 50, 60):", sumarTodos(10, 20, 30, 40, 50, 60));


console.log("\n--- b) Encontrar el máximo en un array ---");
const puntajes = [150, 400, 900, 50, 750];

const puntajeMaximo = Math.max(...puntajes);

console.log("Puntajes del juego:", puntajes);
console.log("El puntaje más alto es:", puntajeMaximo);


console.log("\n--- c) Combinar dos objetos ---");
const infoPersonal = { nombre: "Lucas", edad: 26 };
const infoProfesional = { profesion: "Desarrollador", lenguaje: "JavaScript" };

// Desarmamos ambos objetos y metemos sus propiedades adentro de uno nuevo
const perfilCompleto = { ...infoPersonal, ...infoProfesional };

console.log("Perfil combinado:");
console.log(perfilCompleto);


console.log("\n--- d) Aplanar un array con subarrays ---");
const arrayAnidado = [1, [2, 3], [4]];


const arrayPlano = [].concat(...arrayAnidado);

console.log("Array original (con cajas adentro):", arrayAnidado);
console.log("Array aplanado:", arrayPlano);