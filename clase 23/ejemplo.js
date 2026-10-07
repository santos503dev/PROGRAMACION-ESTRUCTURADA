//function mostrarNom(nombre){
  //  console.log('bienvenido ${nombre}');
//}
//mostrarNom("Eliza");

//const nomMostrar = (nom1) => {
//    console.log('bienvenido ${nom1}');
//}

//nomMostrar("Elizabeth");

//sin parametros y con retorno

//function obtenerPrecio(){
 //   const precio = 25
 //   return precio;
//}

//const resultado = obtenerPrecio();
//console.log(`precio ${resultado}`);

//const precio= () => {
 //    const pres = 50
//    return pres;
//}
//const result =precio()
//console.log(`precio ${result}`);//

//funcion con parametros y retorno

function calculaT(precio,cantidad){
    const total = precio * cantidad;
    return total;
}
const pago = calculaT(5,8);
console.log(`total: ${pago}`);


const calcularTo = (precio1,cantidad1) => {
    const total = precio1 * cantidad1;
    return total;
}
const resultado = calcularTo(15,8);
console.log(`total: ${resultado}`);