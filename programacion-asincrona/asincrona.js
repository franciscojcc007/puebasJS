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
(()=>{
  console.log("Codigo sincrono");
  console.log("Inicio");

  function dos(){
    console.log("dos");
  }
  function uno(){
    console.log("uno");
    dos();
    console.log("tres");
  }
  uno();
  console.log("Fin");
})();

/*  Codigo Asincrono no Bloqueante */

(()=>{
  console.log("Codigo asincrono");
  console.log("Inicio");

  function dos(){
    setTimeout(function(){
      console.log("dos");
    },1000)
  }
  function uno(){
    setTimeout(function(){
      console.log("uno");
    },0);
    dos();
    console.log("tres");

  }
uno();
console.log("Fin");


})();