const ordrnararreglo = (arr= undefined)=>{
  if (arr === undefined) return console.wam("No ingresaste un arreglo de números");
  if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacío");
  for (let num of arr) {
  if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
  }
  return console.info({
    arr,
    asc: arr.map(el => el).sort(),
    desc: arr.map(el => el).sort().reverse()
  });
  
}

ordrnararreglo([4,5,4,8,9,2,2])