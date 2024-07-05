console.log(this);
this.lugar = "Contexto Global";

function saludar(saludo, aQuien){
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`)
}
saludar("hola", "coni");

const obj = {
  lugar: "Contexto Objeto"
}
saludar.call(obj,"Hola","jon");
saludar.apply(obj, ["adios","frank"]);
/*********** uso this⬆️**********/ 