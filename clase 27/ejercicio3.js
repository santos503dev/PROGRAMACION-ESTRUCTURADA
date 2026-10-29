const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const solicitarCantidad = () => {
	rl.question('¿Cuántos equipos desea registrar? ', (respuesta) => {
		const cantidad = Number(respuesta);

		if (!Number.isInteger(cantidad) || cantidad <= 0) {
			console.log('Ingrese una cantidad entera mayor que cero.');
			solicitarCantidad();
			return;
		}

		registrarConsumos(1, cantidad, 0);
	});
};

const registrarConsumos = (equipo, cantidad, total) => {
	if (equipo > cantidad) {
		console.log(`Consumo total de los equipos: ${total} kWh`);
		rl.close();
		return;
	}

	rl.question(`Ingrese el consumo del equipo ${equipo} en kWh: `, (respuesta) => {
		const consumo = Number(respuesta);

		if (!Number.isFinite(consumo) || consumo < 0) {
			console.log('Ingrese un consumo válido (un número igual o mayor que cero).');
			registrarConsumos(equipo, cantidad, total);
			return;
		}

		registrarConsumos(equipo + 1, cantidad, total + consumo);
	});
};

solicitarCantidad();
