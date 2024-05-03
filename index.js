// function  mostrar(){
//         console.log("mexico");
//          return mario = 25;
//     }
//     let recibe = mostrar();

//     console.log(recibe);
//     function carro(color , ano){
//          console.log(` el color del carro es ${color} y ano ${ano}`);
//     }

//     carro("azul", 1990);
//     carro("rojos", 2000)

//     const avion = (destino, numero)=>{
//          console.log(`viaje a la ${destino} con el numero de pasaporte ${numero}`)
//     }
//     avion("saona", 1233)

//     const avion1 = (destino, numero) => {
//          return (`viaje a la ${destino} con el numero de pasaporte ${numero}`);
//     }

//     console.log(avion1("caracol",55523));

//     se cabo function

//     let max= 10
//     const arry =["bien rico", "rico","bueno","regular", "malo","muy malo"];
//     console.log(arry);
//     console.log(arry[0]);
//     console.log(arry[0][2]);
//     const arr = Array(25).fill(1);
//     console.log(arr)
//     const cl = ["R","V","A"]

//     cl.forEach(function(el, index){

//     console.log(`<li id = "${index}">${el}</li>`);

//     });

//     se acabo los arry

//     const persona = {
//          id : 1,
//          edad : 33,
//          nonbre : "juan",
//          soltero : false,
//          saludar:function(){
//          console.log(`hola soy ${this.nonbre} y tengo ${this.edad} y soy ${this.soltero}`)
//     }
//     }

// console.log(persona);
// console.log(persona.edad);
// persona.saludar();

//     let edad = 12;

//     if(edad >= 18){
//          console.log(`tiene ${edad} por lo tanto es mayor de edad`)
//     }else{
//          console.log(`tiene ${edad} por lo tanto eres menor`)
//     }
//     let dia = 2;

//     switch(dia){
//          case 0:
//          console.log("domingo");
//          break;
//          case 1:
//          console.log("lunes");
//          break;
//          case 2:
//          console.log("marte");
//          break;
//         default:
//         console.log("mierdad");
//         break
//     }

//     try {
//          function pruebaTryCatch() {
//              let numero = Math.random(1, 10)
//              return numero;
//          }
//          console.log(pruebaTryCatch);

//     } catch (error) {
//         console.log(error);
//     }

//     function sumar(a,b,...c){
//         let resultado = a+b;

//         c.forEach(n => {
//          resultado += n
//         });
//         return resultado;
//     }
//     console.log(sumar(1,2,5,88))

//     const arr1=[1,2,3];
//          arr2=[4,5,6];

//     console.log(arr1,arr2)

//     const arr3 = [...arr1,...arr2]

//     console.log(arr3)

//     Define una función JavaScript llamada calculateSum que toma una matriz de números como parámetro.

//     Inicializa una variable suma para que contenga la suma total y ponla a 0.

//     Utiliza un bucle for para recorrer el array.

//     Suma cada número de la matriz a la suma.

//     Devuelve la suma calculada.

//     Prueba la función con una matriz de ejemplo y registra el resultado en la consola.

//     Preguntas de esta tarea
//     Escribe una función JavaScript que tome un array de números como argumento y devuelva la suma de todos los números del array.

//     function calculateSum(arr) {
//          let suma=0;
//          for (let i = 0; i < arr.length; i++) {
//               suma += arr[i];
//          }
//       return suma;
//     }
//     const Array = [5,5];
//     console.log(calculateSum(Array))

//     function palabraPalindromo(palabra) {
//          let invertida = palabra.split("").reverse().join("");
//          return (invertida === palabra) ? 'true' : 'false';
//      }

//      console.log(palabraPalindromo("ana"));
//      console.log(palabraPalindromo("mariana"));

//     OOP
//     function planeta(nombre,tamanio){
//         this.nombre = nombre;
//         this.tamaño = tamanio;

//         this.estado = function (){
//             console.log("caliente");
//         }
//     }

//     const marte = new planeta("Marte","120mt")
//         jupiter = new planeta("Jupiter","8mt")

//     console.log(marte);
//     console.log(jupiter);

//     class planeta {
//         constructor(nombre, tamaño) {
//             this.nombre = nombre;
//             this.tamaño = tamaño;

//             this.estado = function () {
//                 console.log("caliente");
//             };
//         }
//     }

//     const marte = new planeta("Marte","120mt")
//     const jupiter = new planeta("Jupiter","8mt")

//     console.log(marte);
//     console.log(jupiter);

//     Herecia
//     function satelite(nombre,tamanio,edad){
//         this.super = planeta;
//         this.super(nombre,tamanio);
//         this.edad = edad;
//     }
//     satelite.prototype = new planeta();
//     satelite.prototype.contructor = satelite;

//         class planeta {
//           constructor(nombre, tamanio) {
//             this.nombre = nombre;
//             this.tamaño = tamanio;
//           }
//           estado() {
//             console.log("caliente");
//           };
//         }

//         class satelites extends planeta {
//           constructor(nombre, tamanio, satelite) {
//             super(nombre, tamanio);
//             this.satelite = satelite;
//           }
//           estado() {
//             console.log("frio");
//           }
//           static particula() {
//             console.log("tiene particulas fotante a rededor de ella");
//           }
//         }

//         const marte = new planeta("Marte", "120mt")
//         const jupiter = new planeta("Jupiter", "8mt")
//         const luna = new satelites("Luna", "120mt", true);

//         console.log(marte);
//         marte.estado();
//         console.log(jupiter);
//         console.log(luna);
//         luna.estado();
//         satelites.particula();

//     console.log(console);
//     console.error("Esto es un error");
//     console.warn("Esto es un aviso");;
//     console.info("Esto es un mensje informativo");
//     console.log('Un registro de 10 que ha pasado en nuestra aplicación');
//     console.clear();

//     let nombre = "Jon",
//     apellido = "MirCha",
//     edad = 35;

//     console.log(nombre);
//     console.log(apellido);
//     console.log(edad);
//     console.log(nombre, apellido, edad);

//     console.log(`Hola mi nombre es ${nombre} ${apellido}
//     y tengo ${edad} años.`);

//     console.log(`Hola mi nombre es %s %s y tengo %d año.`,nombre, apellido, edad);

//     console.log(window);
//     console.log(document);
//     console.dir(window);
//     console.dir(document);
//     console.clear();

//     console.log(Date())

//     console.log(Math.round(Math.random() * 100));
//     let alerta = alert("esto es una alerta"),
//     confirmacion = confirm("Hola esto es unaconfirmación"),
//     aviso = prompt("Hola esto es un aviso y le permite al usuario ingresar un valor");
//     console.log(alerta);
//     console.log(confirmacion);
//     console.log(aviso);

//     let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentium sit eaque recusandae id sapiente similique, laudantium voluptatum perferendis ea iure d odio doloremque earum voluptate.";
//     let expReg = new "ig");
//     console.log(expReg.test(cadena));
//     console.log(expReg.exec(cadena));

//     let expReg2 = /lorem{1}/ig;
//     console.log(expReg2.test(cadena));
//     console.log(expReg2.exec(cadena));

//       Función Anónima Autoejecutable
// (function () {
//   console.log("Mi primera IIFE");

// })();

// (function (d, w,c){
//   console.log("Mi segunda IIFE");
//      console.log(d);
//      console.log(w);
//      c.log('es un console.log')

// })(document, window, console);

// import{pi}from "./cont.js"
// console.log(pi);



