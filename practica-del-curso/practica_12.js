const numerosprimos = (numero = undefined)=> {
  if(numero === undefined) return console.warn("No ingresaste un numero");
  if(typeof numero!== "number") return console.error(`El valor "${numero}" ingresado, No es un numero`);
  if(numero === 0) return console.error('El numero no puede ser "0"');
  if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo");
  if (numero === 1) return console.error("El numero no puede ser igual a 1");
  
  let divicible = false;
  for (let i = 2; i < numero; i++) {
    if(numero % i === 0){
      divicible = true;
      break;
    }
  }
  return (divicible)
    ?console.info(`El numero ${numero} NO es primo`)
    :console.info(`El numero ${numero} SI es primo`); 


}

numerosprimos(7);