// function mifunction(texto,veces){
//      for (let i = 1; i <=veces; i++) {
//         console.log(`${texto},${i}`)
          
//      }
     
// }

// mifunction("hola", 3);


const repetirTexto = (texto = "", veces = undefined)=> {
     if (!texto) return console.warn("no ingresaste un texto");
     if (veces === undefined) return console.warn("No ingresaste el número de veces a repetir el texto");
     if (veces === 0) return console.error("El número de veces no puede ser 0");
     if (Math.sign(veces) === -1) return console.error("número de veces no puede ser negativo");
     for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
}
     repetirTexto("Hola Mundo", 5)
