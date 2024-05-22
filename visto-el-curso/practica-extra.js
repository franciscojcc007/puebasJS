class Libro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = true;
  }

  prestar() {
    if (this.disponible) {
      this.disponible = false;
      console.log(`"${this.titulo}" ha sido prestado.`);
    } else {
      console.log(`"${this.titulo}" no está disponible.`);
    }
  }

  devolver() {
    if (!this.disponible) {
      this.disponible = true;
      console.log(`"${this.titulo}" ha sido devuelto.`);
    } else {
      console.log(`"${this.titulo}" ya está disponible.`);
    }
  }
}

class Biblioteca {
  constructor() {
    this.catalogo = [];
  }

  agregarLibro(libro) {
    this.catalogo.push(libro);
    console.log(`"${libro.titulo}" ha sido agregado al catálogo.`);
  }

  mostrarLibrosDisponibles() {
    console.log("Libros disponibles:");
    this.catalogo.forEach(libro => {
      if (libro.disponible) {
        console.log(`- ${libro.titulo} by ${libro.autor}`);
      }
    });
  }
}

// Ejemplo de uso:
const biblioteca = new Biblioteca();

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez");
const libro2 = new Libro("El principito", "Antoine de Saint-Exupéry");
const libro3 = new Libro("Don Quijote de la Mancha", "Miguel de Cervantes");

biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);

biblioteca.mostrarLibrosDisponibles();

libro1.prestar();
libro2.prestar();

biblioteca.mostrarLibrosDisponibles();

libro1.devolver();

biblioteca.mostrarLibrosDisponibles();
