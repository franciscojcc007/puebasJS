const cadenaInvertida = (cadena="")=>{
     (!cadena)
     ?console.warn("No ingresaste una cadena de texto")
     :console.info(cadena.split("").reverse().join(""));

}
cadenaInvertida("Hola mundo")


//escribe alreves
let letra = "pato";
let palabras = "";

for(let i =letra.length-1; i>=0; i--)
{
     palabras += letra[i];
}
console.log(palabras);