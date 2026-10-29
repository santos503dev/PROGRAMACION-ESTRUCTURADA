const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sumarPares(n) {
  if (n === 0) {
    return 0;
  }

  return 2 * n + sumarPares(n - 1);
}

function sumarImpares(n) {
  if (n === 0) {
    return 0;
  }

  return (2 * n - 1) + sumarImpares(n - 1);
}

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function solicitarN(operacion) {
  rl.question('Ingrese un numero entero no negativo para n: ', (respuesta) => {
    const n = Number(respuesta);

    if (!Number.isInteger(n) || n < 0) {
      console.log('El valor debe ser un numero entero no negativo.');
      solicitarN(operacion);
      return;
    }

    switch (operacion) {
      case 'pares':
        console.log(`La suma de los primeros ${n} numeros pares es ${sumarPares(n)}.`);
        break;
      case 'impares':
        console.log(`La suma de los primeros ${n} numeros impares es ${sumarImpares(n)}.`);
        break;
      case 'fibonacci':
        console.log(`El termino de Fibonacci en la posicion ${n} es ${fibonacci(n)}.`);
        break;
    }

    rl.close();
  });
}

function mostrarMenu() {
  console.log('\nSeleccione una operacion:');
  console.log('1. Sumar los primeros n numeros pares');
  console.log('2. Sumar los primeros n numeros impares');
  console.log('3. Calcular el termino n de Fibonacci');

  rl.question('Opcion: ', (opcion) => {
    switch (opcion.trim()) {
      case '1':
        solicitarN('pares');
        break;
      case '2':
        solicitarN('impares');
        break;
      case '3':
        solicitarN('fibonacci');
        break;
      default:
        console.log('Opcion no valida. Seleccione 1, 2 o 3.');
        mostrarMenu();
    }
  });
}

mostrarMenu();
