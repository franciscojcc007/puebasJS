const objUsuarios ={}
console.log(objUsuarios);

const Usuarios = ["jose", "ramon","miguel"];
Usuarios.forEach((usuario,index)=>objUsuarios[`id_${index}`] = usuario);
console.log(objUsuarios);

/***********propiedades dinamicas⬆️**********/  

const fn =(a)=>"soy una funcion " +a;
console.log(fn("llamana fn"));

/************funcion primer orden⬆️*****************/
const fn2 = (f, some) => {
  console.log("algo pase aqui");
  console.log(f(some));
}
fn2(fn,"que se llama desde otra funcion");
/************funcion de orden superior⬆️*************/


