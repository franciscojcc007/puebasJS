// function mifunction(strings, caracteres) {
//   let array = strings.split(caracteres);
//     return array;
// }
// console.log(mifunction('hola que tal', ' '));

const cadenaAArreglo = (cadena = "", separador = undefined) =>
  (!cadena)
    ? console.warn("No ingresaste una cadena de texto")
    :(separador === undefined)
      ? console.warn("no ingresaste el carácter separador")
      : console.info(cadena.split(separador));

cadenaAArreglo("Hola Mundo", " ");