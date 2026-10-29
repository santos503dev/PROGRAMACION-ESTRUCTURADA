function factorial(numero) {
  if (numero === 0) {
    return 1;
  }

  return numero * factorial(numero - 1);
}

console.log(`factorial(0) = ${factorial(0)}`);
console.log(`factorial(5) = ${factorial(5)}`);
console.log(`factorial(7) = ${factorial(7)}`);