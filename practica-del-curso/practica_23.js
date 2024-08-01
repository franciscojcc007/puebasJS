const arregloParesImpares = (arr = undefined) =>{
  if (arr === undefined) return console.wam("No ingresaste un arreglo de números");
  if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacío");
  for (let num of arr) {
  if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`)
  }

  return console.info({
    pares: arr.filter(num=>num % 2 === 0),
    impares: arr.filter(num=>num % 2 !== 0)
  })
}
arregloParesImpares([2,4,6,1,5,7,9])