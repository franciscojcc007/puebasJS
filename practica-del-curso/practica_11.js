const factorial =(numero = undefined) =>{

  if(numero === undefined) return console.warn("No ingresaste un numero");
  if(typeof numero!== "number") return console.error(`El valor "${numero}" ingresado, No es un numero`);
  if(numero === 0) return console.error('El numero no puede ser "0"');
  if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo");

  let fatorial = 1;


  for (let i = numero; i > 1; i--) {
    fatorial *= i;
    
  }
  return console.info(`El factorial de ${numero} es ${fatorial}`);
}
factorial(4);

