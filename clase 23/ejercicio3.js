import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const precioEntrada = 5.00;

function calcularSubtotal(cantidadEntradas) {
	return cantidadEntradas * precioEntrada;
}

function calcularDescuento(cantidadEntradas, subtotal) {
	return cantidadEntradas >= 5 ? subtotal * 0.15 : 0;
}

rl.question('¿Cuántas entradas desea comprar? ', (dato) => {
	const cantidadEntradas = parseInt(dato, 10);
	const subtotal = calcularSubtotal(cantidadEntradas);
	const descuento = calcularDescuento(cantidadEntradas, subtotal);
	const total = subtotal - descuento;

	console.log(`Subtotal: $${subtotal.toFixed(2)}`);
	console.log(`Descuento: $${descuento.toFixed(2)}`);
	console.log(`Total a pagar: $${total.toFixed(2)}`);

	rl.close();
});
