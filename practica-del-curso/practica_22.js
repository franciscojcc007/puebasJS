const arrayMinMax = (arr = undefined) =>{
  if (arr === undefined) return console.wam("No ingresaste un arreglo de números");

  if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacío");

  for (let num of arr) {
  if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`)
  }

  return console.info(`Arreglo original: ${arr}\nvalor mayor: ${Math.max(...arr)}\n valor menor: ${Math.min(...arr)}`);
}

arrayMinMax([1,4,5,99,-60])