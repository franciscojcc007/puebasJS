const capicua =(numero=0)=>{
  if(!numero)return console.warn("numero no existe");
  if(typeof numero !== "number")return console.error(`Este ${numero} no es un numero`);
  
  numero = numero.toString();
  let numeroInverso = numero.split("").reverse().join("");

  return(numero === numeroInverso)
    ? console.info(`El numero ${numero} es capicua`)
    : console.info(`El numero ${numero} no es capicua el reves ${numeroInverso}`); 
}
capicua(2002);
