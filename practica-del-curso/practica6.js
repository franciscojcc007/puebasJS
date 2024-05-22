const contarTextoRepite = (cadena="", texto="")=>{
    if(!cadena) return console.warn("No ingresaste una cadena de texto");
    if(!texto) return console.warn("No ingresaste la palabra a evaluar");
    let i = 0,
        contador = 0;

    while(i !== -1){
        i = cadena.indexOf(texto, i);
        if(i !== -1){
            i++;
            contador++;
        }
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces`);
}

contarTextoRepite("hola bebe como estas bebe eres mi bebe","bebe");