//creamos un objeto con las llaves proporcionadas en el desafio
let llaves = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat" 
  };
  
  //Creamos la funcion encriptar usando expresiones regulares con el modificador global
  function encriptar(texto) {
    return texto.replace(/[aeiou]/g, function(match) {
      return llaves[match];
    });
  }
  
  //Creamos la funcion para desencriptar
  function desencriptar(texto) {
    return texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  }
  
  //Creamos otra funcion para contar cuantas palabras encripto
  function contarPalabras(texto) {
    let palabras = texto.trim().split(/\s+/);
    let palabrasConLetrasEnLlaves = 0;
  
    for (let palabra of palabras) {
      if (contieneLetraEnLlaves(palabra)) {
        palabrasConLetrasEnLlaves++;
      }
    }
  
    return palabrasConLetrasEnLlaves;
  }
  
  let contadorPalabras = 0;; 
  
  //Adicional crearemos otra funcion para validar que la palabra contenga una letra de la llave
  function contieneLetraEnLlaves(palabra) {
    for (let letra in llaves) {
      if (palabra.includes(letra)) {
        return true;
      }
    }
    return false;
  }
  
  //Creamos la funcion para encriptar y la asignamos al boton con onclick
  function procesar() {
    let entrada = document.getElementById("textoOriginal");
    let salida = document.getElementById("textoEncriptado");
    let texto = entrada.value;
  
    if (texto.trim() === "") {
      mostrarNotificacion("No ingresaste ningún texto");
      return;
    }
  
    let resultado = encriptar(texto);
    contadorPalabras += contarPalabras(texto);
    document.getElementById("contadorPalabras").innerText = "Palabras Encritadas " + contadorPalabras;
    salida.value = resultado;
    mostrarNotificacion("Texto encriptado correctamente");
  }
  
  //Creamos la funcion para desencriptar y la asignamos al boton con onclick
  function procesarDesencriptar() {
    let entrada = document.getElementById("textoOriginal");
    let salida = document.getElementById("textoEncriptado");
    let texto = entrada.value;
  
    if (texto.trim() === "") {
      mostrarNotificacion("No ingresaste ningún texto");
      return;
    }
  
    let resultado = desencriptar(texto);
    salida.value = resultado;
    mostrarNotificacion("Texto desencriptado correctamente");
  }
  
 // Creamos la función procesarBotonCopiar para el botón "copiar"
function procesarBotonCopiar() {
  let texto = document.getElementById("textoEncriptado").value.trim();
  if (!texto) {
    notificarNadaQueCopiar();
    return;
  }
  copiarAlPortapapeles(texto);
}

// Creamos la función para copiar al portapapeles
function copiarAlPortapapeles(texto) {
  if (texto.trim() === "") {
    return;
  }

  // Creamos un elemento temporal de tipo input
  const inputTemp = document.createElement("input");
  inputTemp.value = texto;
  document.body.appendChild(inputTemp);

  // Seleccionamos el contenido del input temporal
  inputTemp.select();
  inputTemp.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Ejecutamos el comando de copiado
  document.execCommand("copy");

  // Removemos el input temporal
  document.body.removeChild(inputTemp);

  mostrarNotificacion("Texto copiado al portapapeles");
}

function notificarNadaQueCopiar() {
  // Lógica para mostrar una notificación cuando no hay texto para copiar
}

function mostrarNotificacion(mensaje) {
  // Lógica para mostrar una notificación de éxito al copiar el texto
}
  
  //Creamos la funcion restablecer para limpiar nuestra area de trabajo con el Boton restablecer
  function borrarSegundoTextarea() {
    let salida = document.getElementById("textoEncriptado");
    let texto = salida.value.trim();
  
    if (texto === "") {
      mostrarNotificacion("No hay nada que limpiar");
      return;
    }
  
    salida.value = "";
    mostrarNotificacion("Limpieza realizada");
  } 
  //Ocultar Divs dinamicamente si hay o no hay ningun texto en nuestra area de trabajo
  function mostrarOcultarDivs() {
    setTimeout(() => {
      let texto = document.getElementById("textoOriginal").value;
      let divPasivo = document.getElementById("pasivo");
      let divActivo = document.getElementById("activo");
      let textoEncriptado = document.getElementById("textoEncriptado");
      if (texto == "") {
        // Si el primer textarea está vacío, mostrar el div pasivo y ocultar el div activo
        divPasivo.style.display = "block";
        divActivo.style.display = "none";
      } else {
        // Si el primer textarea tiene algún valor, ocultar el div pasivo y mostrar el div activo
        divPasivo.style.display = "none";
        divActivo.style.display = "block";
        // Asignar el valor del primer textarea al segundo
        textoEncriptado.value = texto;
      }
    }, 0); // El tiempo de espera es 0 milisegundos
  }
  
  //Creamos la variable global para almacenar el identificador del temporizador
  let timerId = null;
  //Creamos la variable global para almacenar el identificador del intervalo
  let intervalId = null;
  //Creamos la funcion notificacion y creamos la variable notificacion para asignarle una clase y trabajar en CSS
  function mostrarNotificacion(mensajeTexto) {
    mensaje.innerText = mensajeTexto; //se cambia el texto del párrafo por el que se quiere mostrar
    notificacion.classList.add("show");
    //Cancelamos el temporizador anterior si existe
    clearTimeout(timerId);
    //Cancelamos el intervalo anterior si existe
    clearInterval(intervalId);
    //Creamos un nuevo temporizador y guardamos su identificador en la variable timerId
    timerId = setTimeout(function() {
      notificacion.classList.remove("show");
    }, 3000);
    //Obtenemos el elemento progress dentro de la notificación
    let progress = document.querySelector("#notificacion progress");
    //Asignamos el valor máximo al elemento progress
    progress.max = 3000;
    //Asignamos el valor actual al elemento progress
    progress.value = 3000;
    //Creamos un nuevo intervalo para actualizar el valor del elemento progress cada 10 milisegundos y guardamos su identificador en la variable intervalId
    intervalId = setInterval(function() {
      //Reducimos el valor del elemento progress en 10 unidades
      progress.value -= 10;
      //Si el valor del elemento progress llega a cero, detenemos el intervalo
      if (progress.value === 0) {
        clearInterval(intervalId);
      }
    }, 10);
  }
  
  //Cerrar notificaciones usadas en las notificaciones anteriores
  const notificacion = document.getElementById("notificacion");//usamos el ID del div de la notificacion
  const mensaje = document.querySelector(".mensaje"); //usamos su clase
  const cerrar = document.getElementById("cerrar");//usamos el ID del boton cerrar
  
 
  
  

