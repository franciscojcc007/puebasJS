let id = Symbol();
let id2 = Symbol();

console.log(id === id2);

console.log(id, id2);
console.log(typeof id, typeof id2);

const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");

const persona = {
[NOMBRE]: "Jon"
};

console.log(persona);
persona.NOMBRE = "frank"
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function () {
console.log('hola');
};
console.log(persona)
persona[SALUDAR]

for(let propiedad in persona){
  console.log(propiedad);
  console.log(persona[propiedad])
}
/*********** uso de symbol ⬆️**************/


