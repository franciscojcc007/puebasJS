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
