
let mapa = new Map();
mapa.set("nombre", "frank");
mapa.set("edad", 30);
mapa.set("apellido", "perez");

console.log(mapa);
console.log(mapa.size);
console.log(mapa.get("nombre"))
console.log(mapa.has("apellido"));
mapa.delete("edad")
console.log(mapa)

for (let [key, value] of mapa){
  console.log(`clave: ${key} valor: ${value}`);
}

/************uso del map ⬆️*************/


