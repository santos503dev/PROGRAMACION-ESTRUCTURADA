const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function factorial(numero) {
  if (numero <= 1) {
    return 1;
  }

  return numero * factorial(numero - 1);
}

function potencia(base, exponente) {
  if (exponente === 0) {
    return 1;
  }

  return base * potencia(base, exponente - 1);
}

function sumaHasta(numero) {
  if (numero === 0) {
    return 0;
  }

  return numero + sumaHasta(numero - 1);
}

function solicitarNumero() {
  rl.question('Ingrese un numero entero no negativo: ', (respuesta) => {
    const numero = Number(respuesta);

    if (!Number.isInteger(numero) || numero < 0) {
      console.log('El valor debe ser un numero entero no negativo.');
      solicitarNumero();
      return;
    }

    console.log(`Factorial de ${numero}: ${factorial(numero)}`);
    console.log(`${numero} elevado a ${numero}: ${potencia(numero, numero)}`);
    console.log(`Suma desde 1 hasta ${numero}: ${sumaHasta(numero)}`);
    rl.close();
  });
}

solicitarNumero();
