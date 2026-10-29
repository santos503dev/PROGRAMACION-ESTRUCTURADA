import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const registrarNotas=(actual,cantidad,suma)=>{

}

function solicitarCantidadEvaluaciones() {
	rl.question('Ingrese la cantidad de evaluaciones realizadas: ', (dato) => {
		const cantidad = Number(dato);

		if (!Number.isInteger(cantidad) || cantidad <= 0) {
			console.log('La cantidad debe ser un número entero mayor que 0.');
			solicitarCantidadEvaluaciones();
			return;
		}

		solicitarCalificacion(cantidad, 0, 0);
	});
}

function solicitarCalificacion(cantidad, evaluacionActual, suma) {
	if (evaluacionActual === cantidad) {
		const promedio = suma / cantidad;

		console.log(`Promedio: ${promedio.toFixed(2)}`);
		console.log(promedio >= 6 ? 'El estudiante aprobó.' : 'El estudiante reprobó.');
		rl.close();
		return;
	}

	rl.question(`Ingrese la calificación ${evaluacionActual + 1} (0 a 10): `, (dato) => {
		const calificacion = Number(dato);

		if (!Number.isFinite(calificacion) || calificacion < 0 || calificacion > 10) {
			console.log('La calificación debe estar comprendida entre 0 y 10.');
			solicitarCalificacion(cantidad, evaluacionActual, suma);
			return;
		}

		solicitarCalificacion(cantidad, evaluacionActual + 1, suma + calificacion);
	});
}

solicitarCantidadEvaluaciones();
