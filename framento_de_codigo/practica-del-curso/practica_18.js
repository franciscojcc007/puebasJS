const contarLetras = (cadena = "" )=>{
  if(!cadena) return console.warn("No ingresaste una cadena de texto");
  if(typeof cadena !== "string") return console.error(`El valor ${cadena}ingresado, no es una cadena de texto`);
  
  let vocales = 0,
    consonantes = 0;

  cadena = cadena.toLocaleLowerCase();

  for(let letra of cadena){
    if(/[aeiouáéíóú]/.test(letra))vocales++;

    if(/[bcdfghjklmnpqrstvwxyz]/.test(letra))consonantes++; 
  }
  return console.info({
    cadena,
    vocales,
    consonantes
  })
}
contarLetras("hola bebe");