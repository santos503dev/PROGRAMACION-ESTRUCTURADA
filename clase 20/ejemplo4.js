import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("¿Cuántos visitantes llegarán? ", (cantidad) => {
  const totalVisitantes = Number(cantidad);

  if (Number.isNaN(totalVisitantes) || totalVisitantes <= 0) {
    console.log("Por favor ingresa un número válido mayor que 0.");
    rl.close();
    return;
  }

  let entradasGratis = 0;

  for (let visitante = 1; visitante <= totalVisitantes; visitante++) {
    if (visitante % 5 === 0) {
      entradasGratis++;
    }
  }

  console.log(`Entradas gratuitas otorgadas: ${entradasGratis}`);

  rl.close();
});
