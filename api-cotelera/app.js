let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
    if(pagina < 100){
        pagina += 1;
        cargarPeliculas();
    }
});

btnAnterior.addEventListener('click', () => {
    if(pagina > 1){
        pagina -= 1;
        cargarPeliculas();
    }
});

const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita&page=${pagina}`);

        console.log(respuesta);

        // Si la respuesta es correcta
        if(respuesta.status === 200){
            const datos = await respuesta.json();
            console.log(datos)

            let peliculas = '';
            datos.drinks.forEach(drink => {
                peliculas += `
                    <div class="pelicula">
                        <h3 class="titulo">${drink.strDrink}</h3>
                        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
                    </div>
                `;
            });

            document.getElementById('contenedor').innerHTML = peliculas;

        } else if(respuesta.status === 401){
            console.log('Pusiste la llave mal');
        } else if(respuesta.status === 404){
            console.log('La película que buscas no existe');
        } else {
            console.log('Hubo un error y no sabemos qué pasó');
        }

    } catch(error){
        console.log(error);
    }

}

cargarPeliculas();
