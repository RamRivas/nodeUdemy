// Tabla del 5
const fs = require("fs");
const { crearArchivo } = require("./helpers/multiplicar");

console.clear();

// const multiplo = 4;

console.log(process.argv);

const [ , , arg3 = "multiplo=5"] = process.argv;
const [ , multiplo = 5] = arg3.split("=");

// console.log(multiplo);
crearArchivo(multiplo, fs)
    .then( nombreArchivo => console.log( nombreArchivo, "creado" ) )
    .catch( err => console.log(err) );
