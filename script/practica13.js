const numeroParImpar = (numero=undefined)=>{
  if(numero===undefined) return console.warn("No ingresaste un numero");
  if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado, NO es un numero`);

  return (numero % 2 === 0)
    ? console.info(`El numero ${numero} es Par`)
    : console.info(`El numero ${numero} es Impar`);

}

numeroParImpar(-9);
numeroParImpar(4);
numeroParImpar(0)