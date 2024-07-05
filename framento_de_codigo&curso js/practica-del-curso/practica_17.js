
const calcularAnios =(fecha = undefined)=>{
  if(fecha === undefined ) return console.warn("No ingresaste la fecha");
  if(!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una  fecha valida");

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMs = 365 * 24 * 60 * 60 * 1000
    aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMs);

    return (Math.sign(aniosHumanos) === -1)
    ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
    : (Math.sign(aniosHumanos) === 1)
      ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
      : console.info(`Estamos en el años actual ${fecha.getFullYear()}.`)
  }

calcularAnios(new Date(2030,2,11))



