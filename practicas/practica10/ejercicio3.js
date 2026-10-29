function filtrarParesMayoresA10(numeros) {
  const resultado = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0 && numeros[i] > 10) {
      resultado.push(numeros[i]);
    }
  }

  return resultado;
}

const numeros = [4, 10, 11, 12, 15, 18, 20, 23];
console.log(filtrarParesMayoresA10(numeros));
