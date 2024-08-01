const palindromo = (palabra="")=>{
    if(!palabra) return console.warn("No ingresaste una palabra");
    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");
    return (palabra === alReves)
        ? console.info(`Si es Palindromo, Palabra original ${palabra}, Palabra al revez ${alReves}`)
        : console.info(`No es Palindromo, Palabra original ${palabra}, Palabra al revez ${alReves}`);

}

palindromo("ana");