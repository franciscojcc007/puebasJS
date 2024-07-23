const covertiGrados = (grados= undefined, unidad = undefined)=> {
  if(grados === undefined) return console.warn("No ingresaste grados a convertir");
  if(typeof grados !== "number") return console.error(`el valor ${grados} ingresado, No es un numero`);
  if(unidad === undefined) return console.warn("No ingresaste el tipo de unidad a convertir");
  if(typeof unidad !== "string") return console.error(`El valor ${unidad} ingresado, No es una unidad`);
  if (unidad.length !== 1 || !/C|F/i.test(unidad)) return console.warn(`valor ${unidad} no reconocido`);

  
  if (unidad === "C"){
    return console.info(`${grados}°C = ${Math.round((grados * (9/5))+ 32)}°F`)
  }else if(unidad === "F"){ 
    return console.info(`${grados}°F = ${Math.round(((grados - 32) * (5/9)))}°C`)

  }
  
} 
covertiGrados(2,"i")
covertiGrados(100, "C")
covertiGrados(100, "F")