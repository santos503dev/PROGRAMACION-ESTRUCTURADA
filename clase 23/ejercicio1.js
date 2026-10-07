import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularPrecioFinal(precio){
    const descuento = precio * 0.10;
    const precioFinal = precio - descuento;
    
    return precioFinal;
}

rl.question('Ingres el precio del producto:', (dato) => {
    const precio = parseFloat(dato);
    const total = calcularPrecioFinal(precio);

    console.log(`precio original: ${precio.toFixed(2)}`);
    console.log(`precio final con descuento: ${total.toFixed(2)}`);

    rl.close();
})