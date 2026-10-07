import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("¿Cuántos boletos comprará? ", (cantidad) => {
  const totalBoletos = Number(cantidad);

  if (Number.isNaN(totalBoletos) || totalBoletos <= 0) {
    console.log("Por favor ingresa un número válido mayor que 0.");
    rl.close();
    return;
  }

  console.log(`
Precio de los boletos:
`);

  for (let boleto = 1; boleto <= totalBoletos; boleto++) {
    if (boleto <= 4) {
      console.log(`Boleto ${boleto}: $4.00`);
    } else {
      console.log(`Boleto ${boleto}: $3.00 (con descuento)`);
    }
  }

  rl.close();
});
