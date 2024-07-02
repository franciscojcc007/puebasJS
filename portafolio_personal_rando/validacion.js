//Haz tú validación en javascript acá
const input = document.getElementById("birth")

input.addEventListener("input", (event) => {
    validarFecha(event.target)
})

function validarFecha(input){
    const fechaInput = new Date(input.value);// Esto convierte la cadena de fecha en un objeto de fecha que se puede comparar
    let msg = "";  // para almacenar el mensaje de error en caso de que la fecha de nacimiento no cumpla con el requisito de edad
    if(!MayorDeEdad(fechaInput)){
        msg = "Debes tener al menos 18 años de edad para enviar el formulario" 
        input.setCustomValidity(msg);  
        input.reportValidity() // para mostrar el mensaje de validación personalizado en el campo de entrada
    };
}


function MayorDeEdad(fechaInput){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fechaInput.getUTCFullYear() + 18, //se agrega el + 18 para comparar 18 años a la fecha actualy devuelve true si la fecha de nacimiento es anterior a la fecha actual más 18 años. De lo contrario, devuelve false.
        fechaInput.getUTCMonth(), 
        fechaInput.getUTCDate()
    );
    return diferenciaFechas < fechaActual;
}