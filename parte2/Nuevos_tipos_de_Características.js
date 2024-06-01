// let id = Symbol();
// let id2 = Symbol();

// console.log(id === id2);

// console.log(id, id2);
// console.log(typeof id, typeof id2);

// const NOMBRE = Symbol("nombre");
// const SALUDAR = Symbol("saludar");

// const persona = {
// [NOMBRE]: "Jon"
// };

// console.log(persona);
// persona.NOMBRE = "frank"
// console.log(persona);
// console.log(persona.NOMBRE);
// console.log(persona[NOMBRE]);

// persona[SALUDAR] = function () {
// console.log('hola');
// };
// console.log(persona)
// persona[SALUDAR]

// for(let propiedad in persona){
//   console.log(propiedad);
//   console.log(persona[propiedad])
// }
/************* uso de symbol ⬆️****************/


// const set = new Set([1,2,3,3,4,5,true,false,false,{},{},"hola", "HOLA"]);
// console.log(set);
// console.log(set.size);

// const set2 = new Set();
// set2.add(1);
// set2.add(2);
// set2.add(2);
// set2.add(3);
// set2.add(true);
// set2.add(false);
// set2.add(false);
// set2.add("hola");
// set2.add("HOLA");
// console.log(set2);

// for(item of set){
//   console.log(item);
// }
// set2.forEach(item => console.log((item)));

// let arr = Array.from(set);
// console.log(arr);

// console.log(set.has("hola"));

/********* uso de Set ⬆️***********/

// let mapa = new Map();
// mapa.set("nombre", "frank");
// mapa.set("edad", 30);
// mapa.set("apellido", "perez");

// console.log(mapa);
// console.log(mapa.size);
// console.log(mapa.get("nombre"))
// console.log(mapa.has("apellido"));
// mapa.delete("edad")
// console.log(mapa)

// for (let [key, value] of mapa){
//   console.log(`clave: ${key} valor: ${value}`);
// }

/**************uso del map ⬆️*************/


/***********  **********/  


