// function mostrar() {
//   console.log("México");
//   return mario = 25;
// }
// let recibe = mostrar();

// console.log(recibe);
// function carro(color, ano) {
//   console.log(` el color del carro es ${color} y ano ${ano}`);
// }

// carro("azul", 1990);
// carro("rojos", 2000)

// const avion = (destino, numero) => {
//   console.log(`viaje a la ${destino} con el numero de pasaporte ${numero}`)
// }
// avion("saona", 1233)

// const avion1 = (destino, numero) => {
//   return (`viaje a la ${destino} con el numero de pasaporte ${numero}`);
// }

// console.log(avion1("caracol", 55523));

/************************ uso function ⬆️ ****************/

// let max = 10
// const arry = ["bien rico", "rico", "bueno", "regular", "malo", "muy malo"];
// console.log(arry);
// console.log(arry[0]);
// console.log(arry[0][2]);
// const arr = Array(25).fill(1);
// console.log(arr)
// const cl = ["R", "V", "A"]

// cl.forEach(function (el, index) {

//   console.log(`<li id = "${index}">${el}</li>`);

// });

  /****************************** uso de arry ⬆️*********************/

// const persona = {
//   id: 1,
//   edad: 33,
//   nombre: "juan",
//   soltero: false,
//   saludar: function () {
//     console.log(`hola soy ${this.nombre} y tengo ${this.edad} y soy ${this.soltero}`)
//   }
// }

// console.log(persona);
// console.log(persona.edad);
// persona.saludar();
/******************uso de objecto ⬆️**************************/

// let edad = 12;

// if (edad >= 18) {
//   console.log(`tiene ${edad} por lo tanto es mayor de edad`)
// } else {
//   console.log(`tiene ${edad} por lo tanto eres menor`)
// }
/*********************uso de condicionales ⬆️*********************/

// let dia = 2;

// switch (dia) {
//   case 0:
//     console.log("domingo");
//     break;
//   case 1:
//     console.log("lunes");
//     break;
//   case 2:
//     console.log("marte");
//     break;
//   default:
//     console.log("mierdad");
//     break
// }
/*******************8****uso de switch ⬆️************************/


// try {
//   function pruebaTryCatch() {
//     let numero = Math.random(1, 10)
//     return numero;
//   }
//   console.log(pruebaTryCatch);

// } catch (error) {
//   console.log(error);
// }
/***********************uso de try catch ⬆️***************************/


// function sumar(a, b, ...c) {
//   let resultado = a + b;

//   c.forEach(n => {
//     resultado += n
//   });
//   return resultado;
// }
// console.log(sumar(1, 2, 5, 88))

/************** Uso de Parámetros Rest para la Suma de Números ⬆️************/


// const arr1 = [1, 2, 3];
// arr2 = [4, 5, 6];

// console.log(arr1, arr2)

// const arr3 = [...arr1, ...arr2]

// console.log(arr3)
/******* Uso del Operador de Propagación para Combinar Arreglos ⬆️*******/

// function calculateSum(arr) {
//   let suma = 0;
//   for (let i = 0; i < arr.length; i++) {
//     suma += arr[i];
//   }
//   return suma;
// }
// const Array = [5, 5];
// console.log(calculateSum(Array))
/******* Uso de un Bucle for para Sumar los Elementos de un Arreglo ⬆️*******/


// function palabraPalindromo(palabra) {
//   let invertida = palabra.split("").reverse().join("");
//   return (invertida === palabra) ? 'true' : 'false';
// }

// console.log(palabraPalindromo("ana"));
// console.log(palabraPalindromo("mariana"));
/******* Verificación de Palíndromos ⬆️*******/


// class planeta {
//   constructor(nombre, tamaño) {
//     this.nombre = nombre;
//     this.tamaño = tamaño;

//     this.estado = function () {
//       console.log("caliente");
//     };
//   }
// }

// console.log(marte);
// console.log(jupiter);

// Herecia
// function satelite(nombre, tamanio, edad) {
//   this.super = planeta;
//   this.super(nombre, tamanio);
//   this.edad = edad;
// }
// satelite.prototype = new planeta();
// satelite.prototype.contructor = satelite;



// class planeta {
//   constructor(nombre, tamanio) {
//     this.nombre = nombre;
//     this.tamaño = tamanio;
//   }
//   estado() {
//     console.log("caliente");
//   };
// }

// class satelites extends planeta {
//   constructor(nombre, tamanio, satelite) {
//     super(nombre, tamanio);
//     this.satelite = satelite;
//   }
//   estado() {
//     console.log("frio");
//   }
//   static particula() {
//     console.log("tiene particulas fotante a rededor de ella");
//   }
// }

// const marte = new planeta("Marte", "120mt")
// const jupiter = new planeta("Jupiter", "8mt")
// const luna = new satelites("Luna", "120mt", true);

// console.log(marte);
// marte.estado();
// console.log(jupiter);
// console.log(luna);
// luna.estado();
// satelites.particula();
/*******  Extensión de la clase Planeta para representar satélites ⬆️*******/


// console.log(console);
// console.error("Esto es un error");
// console.warn("Esto es un aviso");;
// console.info("Esto es un mensje informativo");
// console.log('Un registro de 10 que ha pasado en nuestra aplicación');
// console.clear();

/************************* uso console ⬆️***************************/



// let nombre = "Jon",
//   apellido = "MirCha",
//   edad = 35;

// console.log(nombre);
// console.log(apellido);
// console.log(edad);
// console.log(nombre, apellido, edad);

// console.log(`Hola mi nombre es ${nombre} ${apellido}
//     y tengo ${edad} años.`);

// console.log(`Hola mi nombre es %s %s y tengo %d año.`, nombre, apellido, edad);

// console.log(window);
// console.log(document);
// console.dir(window);
// console.dir(document);
// console.clear();

// console.log(Date())

// console.log(Math.round(Math.random() * 100));
// let alerta = alert("esto es una alerta"),
//   confirmacion = confirm("Hola esto es unaconfirmación"),
//   aviso = prompt("Hola esto es un aviso y le permite al usuario ingresar un valor");
// console.log(alerta);
// console.log(confirmacion);
// console.log(aviso);

// let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentium sit eaque recusandae id sapiente similique, laudantium voluptatum perferendis ea iure d odio doloremque earum voluptate.";
// let expReg = new ("ig");
// console.log(expReg.test(cadena));
// console.log(expReg.exec(cadena));

// let expReg2 = /lorem{1}/gi;
// console.log(expReg2.test(cadena));
// console.log(expReg2.exec(cadena));
/************ Uso de expresiones regulares ⬆️ ************/

  (function (c) {
    c.log("Mi primera IIFE");

  })(console);

(function (d, w, c) {
  c.log("Mi segunda IIFE");
  c.log(d);
  c.log(w);
  c.log('es un console.log')

})(document, window, console);

/*********************  Función Anónima Autoejecutable ⬆️******************/


