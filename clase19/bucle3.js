import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿cuantas horas duro cada prestamo?", (respuestas) => {
    const horasPrestamo = Number(respuestas);
    const costoHora = 2.25;
    let recaudacionTotal = 0;

    for (let prestamo = 1; prestamo <= 5; prestamo++){
        const costoPrestamo = horasPrestamo * costoHora;
        recaudacionTotal= recaudacionTotal + costoPrestamo;
        console.log(`Prestamo ${prestamo}: Costo del prestamo: ${costoPrestamo.toFixed(2)}`);
    }
    console.log(`Recaudacion total: ${recaudacionTotal.toFixed(2)}`);
    rl.close
})
