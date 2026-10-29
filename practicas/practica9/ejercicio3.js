function sumaDigitos(numero) {
  numero = Math.abs(numero);

  if (numero < 10) {
    return numero;
  }

  return (numero % 10) + sumaDigitos(Math.floor(numero / 10));
}

console.log(`sumaDigitos(1234) = ${sumaDigitos(1234)}`);
console.log(`sumaDigitos(9876) = ${sumaDigitos(9876)}`);