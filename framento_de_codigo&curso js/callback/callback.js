/**************  uso callback **********************/
function cuadradoCallback(value, callback){
  setTimeout(()=>{
    callback(value, value * value);
  },0| Math.random() * 1000);
}

cuadradoCallback(1, (value, result)=>{
  console.log("INICIA CALLBACK");
  console.log(`El cuadrado de ${value} es ${result}`);
  cuadradoCallback(2, (value, result)=>{
  console.log(`El cuadrado de ${value} es ${result}`);
  });
});

