function generarTabla(numero) {
  const tabla = [];

  for (let i = 1; i <= 10; i++) {
    tabla.push(numero * i);
  }

  return tabla;
}

console.log(generarTabla(7));
