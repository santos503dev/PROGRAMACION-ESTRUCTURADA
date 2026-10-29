function invertir(cadena) {
  if (cadena.length <= 1) {
    return cadena;
  }

  return invertir(cadena.substring(1)) + cadena[0];
}

console.log(`invertir("hola") = "${invertir("hola")}"`);
console.log(`invertir("javascript") = "${invertir("javascript")}"`);
