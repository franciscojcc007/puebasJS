const aplicarDescuento =(monto = undefined, descuento = 0)=>{
  if(monto === undefined) return console.warn("No ingresaste un monto");
  if(typeof monto !== "number") return console.error(`el valor ${monto} ingresado, No es un numero`);
  if(monto === 0) return console.error("El monto no puede ser 0");
  if(Math.sign(monto)=== -1) return console.error("El monto no puede ser negativos");
  if(typeof descuento !== "number") return console.error(`el valor ${descuento} ingresado, No es un numero`);
  if(Math.sign(descuento)=== -1) return console.error("El descuento no puede ser negativos");

  return console.info(`${monto} - ${descuento} %= ${monto -((monto/100)* descuento)}`);
  
}
aplicarDescuento(100, 10);
aplicarDescuento(1000, 20)