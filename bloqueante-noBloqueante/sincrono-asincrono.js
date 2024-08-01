let teporizador1 = setTimeout(()=>{
  console.log("ejecución de setTimeut")
},1000)

clearTimeout(teporizador1);

let teporizador2 = setInterval(()=>{
  console.log("ejecución de setInterval")
},4000)

clearInterval(teporizador2);

setInterval(()=>{
  console.log(new Date().toLocaleTimeString())
},5000)

/*  Código Sincrono Bloqueante */
(() => {
  console.log("Código Sincrono");
  console.log("Inicio");

  function dos() {
    console.log("dos");
  }
  function uno() {
    console.log("uno");
    dos();
    console.log("tres");
  }
  uno();
  console.log("Fin");
})();

/*  Código Asíncrono no Bloqueante */

(() => {
  console.log("Código asíncrono");
  console.log("Inicio");

  function dos() {
    setTimeout(function () {
      console.log("dos");
    }, 1000);
  }
  function uno() {
    setTimeout(function () {
      console.log("uno");
    }, 0);
    dos();
    console.log("tres");
  }
  uno();
  console.log("Fin");
})();

