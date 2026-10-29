function analizarVentas(ventas) {
  let total = 0;
  let ventasMayoresA50 = 0;

  for (let i = 0; i < ventas.length; i++) {
    total += ventas[i];

    if (ventas[i] > 50) {
      ventasMayoresA50++;
    }
  }

  const promedio = ventas.length > 0 ? total / ventas.length : 0;

  return {
    total,
    promedio,
    ventasMayoresA50,
  };
}

const ventasDelDia = [25, 60, 45, 80, 50, 100];
console.log(analizarVentas(ventasDelDia));
