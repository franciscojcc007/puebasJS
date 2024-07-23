// function mifunction(letra) {
//      let palapra = letra.slice(0, 4);
//      return palapra;
// }

// console.log(mifunction("Hola Mundo"))

// const recortarTexto = (cadena = "", longitud = undefined) =>
//   (!cadena)
//     ? console.warn("No ingresaste una cadena de texto")
//     : console.info(cadena.slice(0, longitud));

// recortarTexto("Hola Mundo", 4);


const recortarTexto = (cadena = "", longitud = undefined) =>
  (!cadena)
    ? console.warn("No ingresaste una cadena de texto")
    :(longitud === undefined)
      ? console.warn("No ingresaste la longitud para recortar el texto")
      : console.info(cadena.slice(0, longitud));

recortarTexto("Hola Mundo", 7);