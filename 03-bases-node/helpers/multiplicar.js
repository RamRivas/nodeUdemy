

const crearArchivo = async ( multiplo = 5,  fileS) => {
    let salida = "";

    salida += "=======================\n";
    salida += `     Tabla del ${multiplo}       \n`;
    salida += "=======================\n";

    for (let i = 1; i < 11; i++){
        salida += `${multiplo} x ${i} = ${multiplo * i}\n`;
    }

    const nombreArchivo = `tabla-${multiplo}.txt`

    await fileS.writeFileSync( nombreArchivo, salida );

    console.log(`${nombreArchivo} se generó correctamente`);

    return nombreArchivo;
}

module.exports = { crearArchivo };