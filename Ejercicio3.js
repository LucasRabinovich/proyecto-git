console.log("--- a) Crear un libro y acceder a sus propiedades ---");
const libro = {
    titulo: "Ficciones",
    autor: "Jorge Luis Borges",
    anio: 1944
};

// Accedemos usando la "notación de punto"
console.log("Título:", libro.titulo);
console.log("Autor:", libro.autor);
console.log("Año de publicación:", libro.anio);


console.log("\n--- b) Añadir y modificar propiedades ---");
const persona = {
    nombre: "Lucas",
    edad: 19
};
console.log("Persona antes:", persona);

// Modificamos una propiedad que ya existe
persona.edad = 21; 
// Añadimos una propiedad totalmente nueva
persona.hobby = "Programar en JavaScript"; 

console.log("Persona después:", persona);


console.log("\n--- c) Objeto Calculadora (Métodos) ---");
const calculadora = {
    sumar: function(a, b) {
        return a + b;
    },
    restar: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        return a / b;
    }
};

console.log("Suma (10 + 5):", calculadora.sumar(10, 5));
console.log("Resta (20 - 8):", calculadora.restar(20, 8));
console.log("Multiplicación (4 * 3):", calculadora.multiplicar(4, 3));
console.log("División (100 / 2):", calculadora.dividir(100, 2));


console.log("\n--- d) Acceder con una variable (Notación de corchetes) ---");
const auto = {
    marca: "Ford",
    modelo: "Fiesta",
    color: "Azul",
    puertas: 5
};

// Imagina que el usuario escribe en un buscador qué dato quiere saber:
let datoBuscado = "color"; 

// NO podemos usar auto.datoBuscado (porque buscaría una propiedad literal llamada "datoBuscado")
// Usamos corchetes para que JavaScript lea el VALOR de la variable:
console.log(`El ${datoBuscado} del auto es:`, auto[datoBuscado]);

// Si cambiamos la variable, cambia lo que buscamos:
datoBuscado = "modelo";
console.log(`El ${datoBuscado} del auto es:`, auto[datoBuscado]);