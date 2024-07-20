console.log(this);


function usothis(){
  console.log(this);
}
usothis();

'use strict';
function showThis() {
  console.log(this);
}
showThis();

const metodosthis = {
  nombre: 'Juan',
  
  functi: function() {
    console.log(this.nombre)
    
  }
};
metodosthis.functi();
metodosthis.nombre;
/*********** uso this⬆️**********/ 