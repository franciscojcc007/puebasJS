var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");    
pincel.fillStyle = "#ff9";
pincel.fillRect(0,0,700,500); 

function mostrarMensaje(evento){
    var x = evento.pageX - pantalla.offsetLeft; //pos x
    var y = evento.pageY - pantalla.offsetTop; //pos y
    var d = new Date(); //crea una variable de tipo date
    var hora = checkTime(d.getHours()) + ":" + checkTime(d.getMinutes()) + ":" + checkTime(d.getSeconds());
    //Verifica si el número de las horas, minutos o segundos, tiene un solo dígito, 
    //caso positivo le adiciona el cero en la frente para obtener el formato deseado 00:00:00
    function checkTime(i){
        if (i<10){
            i="0" + i;
        }
        return i;
    }

    alert("La hora es: " + hora + " y las coordenadas son: x=" + x + ", y=" + y);
    console.log(`La hora es: " ${hora} " y las coordenadas son: x=" ${x} ", y=" ${y}`)
}


// Aquí viene la llamada a la función con el evento onclick
pantalla.onclick = mostrarMensaje;