console.log("--- a) Extraer variables de un objeto ---");
const persona = {
    nombre: "Lucas",
    edad: 18,
    profesion: "Analista de sistemas",
    ciudad: "Buenos Aires"
};

// En lugar de hacer: const nombre = persona.nombre; const edad = persona.edad;
//lo que hago las propiedades 'nombre' y 'edad' y conviértelas en variables"
const { nombre, edad } = persona;

console.log(`Hola, soy ${nombre} y tengo ${edad} años.`);


console.log("\n--- b) Destructuring directamente en los parámetros de una función ---");
// La función espera recibir un objeto, pero en los parámetros ya lo "desarmamos"
// y le pedimos que solo agarre lo que le interesa (nombre y profesion)
const presentarPersona = ({ nombre, profesion }) => {
    console.log(`El candidato ${nombre} trabaja como ${profesion}.`);
};

// Le pasamos el objeto entero 'persona', y la función extrae solo lo que necesita
presentarPersona(persona);


console.log("\n--- c) Destructuring de Arrays ---");
const infoCiudad = ["Rosario", "Argentina", 1193605];

const [nombreCiudad, pais, poblacion] = infoCiudad;

console.log(`La ciudad de ${nombreCiudad} está en ${pais} y tiene ${poblacion} habitantes.`);