const eliminarDuplicados=(arr = undefined)=>{
  if (arr === undefined) return console.wam("No ingresaste un arreglo de números");
  if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacío");
  if(arr.length === 1) return console.warn("El arreglo bebe tener al menos 2 elementos")
  
  return console.info({
    arreglo: arr,
    sinDuplicados: arr.filter((value, index, self) =>self.indexOf(value)=== index)
  })
}
eliminarDuplicados(["x",10,"x",10,2,false,false],)