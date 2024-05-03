// function miFuncion(letras){
//    let palapras = letras.length;
//    return palapras ;

// }

// console.log(miFuncion("Hola mundo"));

// function contarCaracteres(cadena="") {
//    if (!cadena) {
//    console.wam("No ingresaste ninguna cadena")
//     } else {
//     console.info(` cadena "${cadena}" tiene ${cadena.length} caracteres`);
//    }
// }

const contarCaracteres = (cadena = "") =>
  (!cadena)
    ? console.warn(" No ingresaste ninguna cadena")
    : console.info(` cadena "${cadena}" tiene ${cadena.length} caracteres`);


contarCaracteres("hola");
