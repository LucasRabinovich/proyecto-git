
console.log("--- a) Declaración y reasignación ---");
let edad = 18; 
const nombre = "Lucas";

edad = 19; 
console.log("Mi edad ahora es:", edad); 


console.log("\n--- b) Bucles: let vs const ---");
console.log("Bucle con let:");
for (let i = 0; i < 2; i++) {
    console.log("Vuelta:", i);
}

console.log("\n--- c) Objetos con const ---");
const persona = {
    nombre: "Lucas",
    ciudad: "Buenos Aires"
};

persona.ciudad = "capital federal"; 
console.log("Objeto modificado:", persona);



console.log("\n--- d) var, let y const dentro de bloques ---");
function pruebaVariables() {
    if (true) {
        var variableVar = "Soy var";
        let variableLet = "Soy let";
        const variableConst = "Soy const";
    } 

    console.log("Fuera del bloque:");
    console.log(variableVar); 
    
 
}

pruebaVariables();