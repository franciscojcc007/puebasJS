//Operadores de comparación

const valorPasaje = 1000;

if (valorPasaje === 1000) {
    console.log('El pasaje vale 1000');
}

const ciudadDestino = print = "";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

// const precioCiudad = new Array(500,400,380,200);
// const presupuestoDisponible = 210;
const datos = [
    {
        'ciudad':'Bogotá',
        'precio': 500
    },
    {
        'ciudad':'Lima',
        'precio': 400
    },
    {
        'ciudad':'Santiago',
        'precio': 380
    },
    {
        'ciudad':'Montevideo',
        'precio': 200
    },
];

const presupuestoDisponible = 400;

//While... 0 o más veces
//Do ... 1 o mas veces
/*while(i < datos.length && datos[i].precio > presupuestoDisponible) {
    i++;
}*/
//for... valor inicial para un valor final

let ciudadSeleccionada = '';
for (let i = 0; i < datos.length  && ciudadSeleccionada == ''; i++) {
    
    if (datos[i].precio <= presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
    }
}

if (ciudadSeleccionada == '')
    console.log("No tenemos pasajes disponibles");
else
    console.log("Puedes comprar pasaje para: "+ciudadSeleccionada);

// let i = 0;
//While... 0 o más veces
//Do ... 1 o mas veces
// while(precioCiudad[i] > presupuestoDisponible && i < ciudadesDisponibles.length) {
//     i++;
// }
// console.log(i);
// if (i == ciudadesDisponibles.length)
//     console.log("No tenemos pasajes disponibles");
// else
//     console.log("Puedes comprar pasaje para: "+ciudadesDisponibles[i]);
//Palabra reservada if
//Evalua una condición
//Operadores lógicos
//Y (AND) - O (OR) - NO (NOT)
// AND = && - Se deben cumplir las 2 condiciones
// OR = || - Se debe cumplir una condición al menos
// NOT ! - No se cumple la condición
let edadPasajero = 17;
let estaAcompanado = true;

console.log(`Verificando pasajes para  ${ciudadDestino}`);
if ((ciudadesDisponibles.indexOf(ciudadDestino) > -1) &&
    (edadPasajero >= 18 || estaAcompanado)) {
    console.log('Pasaje disponible para venta');
} else {
    console.log('Ciudad no disponible para viajar o pasajero no cumple las reglas');
}

