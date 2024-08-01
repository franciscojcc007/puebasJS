class pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validadExtreno(estreno);
    this.validarPais(pais);
    this.validarGenero(generos);
    this.validarCalificacion(calificacion);
  }
  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality - TV",
      "Romance",
      "Sci - Fi",
      "Short",
      "Sport",
      "Talk-ShoW",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.info(
      `Los generos aceptados son: ${pelicula.listaGeneros.join(", ")}`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vació`);
    if (typeof valor !== "string")
      return console.error(
        `${propiedad} ${valor} ingresado, No es una cadena de texto`
      );
    return true;
  }
  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}"excede el numero de caracteres permitidos(${longitud}).`
      );
  }
  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vació`);
    if (typeof valor !== "number")
      return console.error(`${propiedad} ${valor} ingresado, No es un numero`);
    return true;
  }
  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vació`);
    if (!(valor instanceof Array))
      return console.error(`${propiedad}"${valor}"ingresado, No es un arreglo`);
    if (valor.length === 0)
      return console.error(` ${propiedad} "${valor}" no tiene datos`);
    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(
          `El valor ${cadena} ingresado, No es un cadena de texto`
        );
      return true;
    }
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id))
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.error(
          `IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros.`
        );
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo))
      this.validarCadena("Titulo", titulo, 100);
  }
  validarDirector(director) {
    if (this.validarCadena("Director", director))
      this.validarCadena("Director", director, 50);
  }
  validadExtreno(estreno) {
    if (this.validarNumero("Año de Entrono", estreno))
      if (!/^([0-9]){4}$/.test(estreno))
        return console.error(
          `Año de estreno "${estreno}" no es valido, debe ser un numero de 4 digitos`
        );
  }
  validarPais(pais) {
    this.validarArreglo("Pais", pais);
  }
  validarGenero(generos) {
    if (this.validarArreglo("Géneros", generos)) {
      for (let genero of generos) {
        //console.log(genero,pelicula.listaGeneros.includes(genero))
        if (!pelicula.listaGeneros.includes(genero)) {
          console.error(`Genero(s)incorrectos "${generos.join(", ")}"`);
          pelicula.generosAceptados();
        }
      }
    }
  }
  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificación",calificacion))
      return(calificacion < 0 || calificacion > 10)
        ? console.error(`Calificación "${calificacion}" no es valida, debe ser un numero entre 0 y 10`)
        : this.calificacion = calificacion.toFixed(1);
    }

    fichaTecnica(){
      console.info(`Ficha Técnica:\nTítulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}\nPaís: "${this.pais.join("-")}\nGéneros: "${this.generos.join(", ")}\nCalificación: "${this.calificacion}"\nIMDB Id: "${this.id}"`)
    }

    }
//pelicula.generosAceptados();
// const peli = new pelicula({
//   id: "tt1234567",
//   titulo: "El señor de los anillos",
//   director: "Peter Jackson",
//   estreno: 2001,
//   pais: ["Mexico"],
//   generos: ["Musical", "Western"],
//   calificacion: 5.45,
// });

// peli.fichaTecnica();
const misPelis = [
  {
    "id": "tt7654321",
    "titulo": "La guerra de las galaxias",
    "director": "George Lucas",
    "estreno": 1977,
    "pais": ["Estados Unidos"],
    "generos": ["Sci-Fi", "Adventure"],
    "calificacion": 8.6
  },
  {
    "id": "tt1122334",
    "titulo": "Matrix",
    "director": "Lana Wachowski, Lilly Wachowski",
    "estreno": 1999,
    "pais": ["Estados Unidos"],
    "generos": ["Sci-Fi", "Action"],
    "calificacion": 8.7
  },
  {
    "id": "tt2233445",
    "titulo": "Titanic",
    "director": "James Cameron",
    "estreno": 1997,
    "pais": ["Estados Unidos"],
    "generos": ["Romance", "Drama"],
    "calificacion": 7.8
  }
]

misPelis.forEach(el => new pelicula(el).fichaTecnica());