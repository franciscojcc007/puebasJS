const convertirBinDec = (numero= undefined, base = undefined)=>{
  if(numero === undefined) return console.warn("No ingresaste grados a convertir");
  if(typeof numero !== "number") return console.error(`el valor ${numero} ingresado, No es un numero`);
  if(base === undefined) return console.warn("No ingresaste el tipo de unidad a convertir");
  if(typeof base !== "number") return console.error(`El valor ${base} ingresado, No es un numero`);

  if(base === 2){
    return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
  }else if(base ===10){
    return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`);
  }else{
    return console.error(`El valor ${base} ingresado, No es una base valida`);
  }
}

convertirBinDec(100,2)
convertirBinDec(4, 10)
convertirBinDec(100, 3)