import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function calcularPromedio(nota1, nota2, nota3) {
	return (nota1 + nota2 + nota3) / 3;
}

function solicitarCalificacion(numero, continuar) {
	rl.question(`Ingrese la calificación ${numero} (de 0 a 10): `, (dato) => {
		const nota = Number(dato);

		if (dato.trim() === '' || !Number.isFinite(nota) || nota < 0 || nota > 10) {
			console.log('Ingrese una nota válida.');
			solicitarCalificacion(numero, continuar);
			return;
		}

		continuar(nota);
	});
}

const calificaciones = [];

function solicitarTresCalificaciones() {
	solicitarCalificacion(calificaciones.length + 1, (nota) => {
		calificaciones.push(nota);

		if (calificaciones.length < 3) {
			solicitarTresCalificaciones();
			return;
		}

		const promedio = calcularPromedio(
			calificaciones[0],
			calificaciones[1],
			calificaciones[2]
		);

		console.log(`Promedio: ${promedio.toFixed(2)}`);

		if (promedio >= 9) {
			console.log('Excelente, usted aprobó.');
		} else if (promedio >= 6) {
			console.log('Usted aprobó.');
		} else {
			console.log('Usted no aprobó.');
		}

		rl.close();
	});
}

solicitarTresCalificaciones();
