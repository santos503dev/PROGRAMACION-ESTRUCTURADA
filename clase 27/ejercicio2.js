import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const registrarNotas = (actual, cantidad, suma) => {

    //Caso Base
    if (actual > cantidad) {
        console.log(`Promedio: ${suma / cantidad}`);
        rl.close();
        return;
    }

    rl.question(`Ingrese la nota ${actual}: `, (datos) => {
        const nota = parseFloat(datos);

        if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
            console.log(`Ingrese una nota entre 0 y 10`);
            registrarNotas(actual, cantidad, suma);
            return;
        }
        const nuevaSuma = suma + nota;
        //LLAMADA RECURSIVA
        registrarNotas(actual + 1, cantidad, nuevaSuma);
    });
}


rl.question(`¿Cuantas evaluaciones desea registrar? `, (datos) => {
    const cantidad = parseFloat(datos);

    if (Number.isInteger(cantidad) && cantidad > 0) {
        registrarNotas(1, cantidad, 0);
    } else {
        console.log(`Cantidad no valida`);
        rl.close();
    }

});