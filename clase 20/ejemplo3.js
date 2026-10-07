import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("¿Cuántos productos fabricó la empresa? ", (cantidad) => {
  const totalProductos = Number(cantidad);

  if (Number.isNaN(totalProductos) || totalProductos <= 0) {
    console.log("Por favor ingresa un número válido mayor que 0.");
    rl.close();
    return;
  }

  const productosRevisar = [];

  for (let producto = 1; producto <= totalProductos; producto++) {
    if (producto % 3 === 0) {
      productosRevisar.push(producto);
    }
  }

  console.log(`Productos que necesitan revisión: ${productosRevisar.join(", ") || "ninguno"}`);
  console.log(`Total de productos a revisar: ${productosRevisar.length}`);

  rl.close();
});
