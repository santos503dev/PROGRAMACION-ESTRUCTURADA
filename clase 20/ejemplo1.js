import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingresa un numero: ", (numero) => {
  const n = Number(numero);

  console.log(`Tabla de multiplicar del ${n}:`);

  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }

  rl.close();
});