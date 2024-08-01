const validadNombre = (nombre="")=>{
  if(!nombre) return console.warn("No ingresaste una cadena de texto");
  if(typeof nombre !== "string") return console.error(`El valor ${nombre}ingresado, no es una cadena de texto`);

  let expReg =/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre);

  return(expReg)
    ? console.info(`El nombre ${nombre} es valido`)
    : console.error(`El nombre ${nombre} no es valido`);

}

validadNombre("Francisco Javier concepción")