const arrayAlCuadrado = (arr = undefined)=>{
  if(arr === undefined) return console.warn("No ingresaste un arreglo de números");
  if(!Array.isArray(arr)) return console.error("El valor ingresado no es un arreglo de números");
  if(arr.length === 0) return console.error("El arreglo esta vació");
  for(let num of arr){
    if(typeof num !== "number") return console.error(`El arreglo contiene valores ${num} que no son números`);
  }

  const newArr = arr.map(el=>el*el);
  return console.info(`Arreglo original:${arr},\nArreglo elevado al cuadrado:${newArr}`)
}
arrayAlCuadrado([2,4,11]);