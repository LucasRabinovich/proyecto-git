console.log("--- a) Presentación con variables ---");
const nombre = "Lucas";
const edad = 26;
const profesion = "Desarrollador de Software"; 

// Las comillas invertidas (backticks) nos permiten inyectar variables usando ${}
const presentacion = `Hola, me llamo ${nombre}, tengo ${edad} años y soy ${profesion}.`;
console.log(presentacion);


console.log("\n--- b) Cálculos directos en el texto ---");
function calcularTotal(precio, cantidad) {
    return `El total es: $${precio * cantidad}`;
}

console.log(calcularTotal(1500, 3));
console.log(calcularTotal(850, 5));


console.log("\n--- c) Mensaje de error formateado ---");
const nombreError = "SyntaxError";
const descripcionError = "Falta un paréntesis de cierre ')' en la línea 14.";

const mensajeAlerta = `¡CUIDADO! 
Tipo de fallo: [${nombreError}]
Detalle: ${descripcionError}`;

console.log(mensajeAlerta);