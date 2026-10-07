import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿cuanto dinero ahorra cada dia?",(dinero) => {
   const ahorroDiario = Number(dinero);

   let ahorroTotal = 0;
   for(let dia=1; dia<=5; dia++){
        ahorroTotal = ahorroTotal + ahorroDiario;
        console.log(`Dia ${dia}: Ahorro total: ${ahorroTotal.toFixed(2)}`);
   }
   console.log(`Ahorro total al final de la semana: ${ahorroTotal.toFixed(2)}`);
   rl.close
})