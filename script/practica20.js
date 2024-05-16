const validadEmail = (email="")=>{
  if(!email) return console.warn("No ingresaste una cadena de texto");
  if(typeof email !== "string") return console.error(`El valor ${email}ingresado, no es una cadena de texto`);

  let expReg =/\w+(\.\w+)*@\w+([.-]\w{2,15})+/i.test(email);

  return(expReg)
    ? console.info(`El nombre ${email} es valido`)
    : console.error(`El nombre ${email} no es valido`);

}

validadEmail("frankmazta@gmail.com")