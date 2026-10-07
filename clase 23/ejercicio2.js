import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularSalario(horasTrabajadas, pagoPorHora) {
  return horasTrabajadas * pagoPorHora;
}

rl.question('Ingresa las horas trabajadas: ', (horasDato) => {
  rl.question('Ingresa el pago por hora: ', (pagoDato) => {
    const horasTrabajadas = parseFloat(horasDato);
    const pagoPorHora = parseFloat(pagoDato);
    const salario = calcularSalario(horasTrabajadas, pagoPorHora);

    console.log(`El salario correspondiente es: $${salario.toFixed(2)}`);
    rl.close();
  });
});