const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function contarVocales(cadena) {
  if (cadena.length === 0) {
    return 0;
  }

  const vocales = 'aeiouáéíóúü';
  const cuentaActual = vocales.includes(cadena[0].toLowerCase()) ? 1 : 0;

  return cuentaActual + contarVocales(cadena.substring(1));
}

function invertir(cadena) {
  if (cadena.length <= 1) {
    return cadena;
  }

  return invertir(cadena.substring(1)) + cadena[0];
}

function esPalindromo(cadena) {
  if (cadena.length <= 1) {
    return true;
  }
  if (cadena[0] !== cadena[cadena.length - 1]) {
    return false;
  }

  return esPalindromo(cadena.substring(1, cadena.length - 1));
}

function normalizarParaPalindromo(cadena) {
  return cadena
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

rl.question('Ingrese una palabra o frase: ', (texto) => {
  const textoNormalizado = normalizarParaPalindromo(texto);

  console.log(`Cantidad de vocales: ${contarVocales(texto)}`);
  console.log(`Cadena invertida: ${invertir(texto)}`);
  console.log(
    esPalindromo(textoNormalizado)
      ? 'La palabra o frase es palindromo.'
      : 'La palabra o frase no es palindromo.'
  );
  rl.close();
});
