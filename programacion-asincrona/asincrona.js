// let teporizador = setTimeout(()=>{
//   console.log("ejecucin de setTimeut")
// },1000)

// clearTimeout(teporizador);

// let teporizador = setInterval(()=>{
//   console.log("ejecucin de setInterval")
// },4000)

// clearInterval(teporizador);

// setInterval(()=>{
//   console.log(new Date().toLocaleTimeString())
// },5000)

/*  Codigo Sincrono Bloqueante */
// (() => {
//   console.log("Codigo sincrono");
//   console.log("Inicio");

//   function dos() {
//     console.log("dos");
//   }
//   function uno() {
//     console.log("uno");
//     dos();
//     console.log("tres");
//   }
//   uno();
//   console.log("Fin");
// })();

// /*  Codigo Asincrono no Bloqueante */

// (() => {
//   console.log("Codigo asincrono");
//   console.log("Inicio");

//   function dos() {
//     setTimeout(function () {
//       console.log("dos");
//     }, 1000);
//   }
//   function uno() {
//     setTimeout(function () {
//       console.log("uno");
//     }, 0);
//     dos();
//     console.log("tres");
//   }
//   uno();
//   console.log("Fin");
// })();

/**************  uso callback **********************/
// function cuadradoCallback(value, callback){
//   setTimeout(()=>{
//     callback(value, value * value);
//   },0| Math.random() * 1000);
// }

// cuadradoCallback(1, (value, result)=>{
//   console.log("INICIA CALLBACK");
//   console.log(`El cuadrado de ${value} es ${result}`);
//   cuadradoCallback(2, (value, result)=>{
//   console.log(`El cuadrado de ${value} es ${result}`);
//   });
// });

/************** uso Promesas ****************/
function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(
      `Error, el valor "${value}" ingresado no es un numero`
    );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}
cuadradoPromise(1)
  .then((obj) => {
    console.log("inico promise");
    console.log(`El cuadrado de ${obj.value} es ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`El cuadrado de ${obj.value} es ${obj.result}`);
    console.log("Fin promise");
  })
  .catch((err) => console.error(err));

/************funcioones asicronas*********/
async function fucionasincronaDeclarada() {
  try {
    console.log("inicio async");

    let obj = await cuadradoPromise(1);
    console.log(`El async funcion ${obj.value} es ${obj.result}`);

    obj = await cuadradoPromise(2);
    console.log(`El async funcion ${obj.value} es ${obj.result}`);
  } catch (err) {
    console.error(err);
  }
}
fucionasincronaDeclarada();

const fucionasincronaEspresada = async () => {
  try {
    let obj = await cuadradoPromise(3);
    console.log(`El async funcion ${obj.value} es ${obj.result}`);

    obj = await cuadradoPromise(4);
    console.log(`El async funcion ${obj.value} es ${obj.result}`);

    console.log("fin async");
  } catch (err) {
    console.error(err);
  }
};
fucionasincronaEspresada();
