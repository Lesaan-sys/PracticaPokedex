//Buscar datos del pokemon dependiendo del numero o nombre
function buscarPokemon(contenedorNumero){
    let inputId = `pokemonInput${contenedorNumero}`;
    let nombrePokemon = document.getElementById(inputId).value.trim().toLocaleLowerCase();
    let urlAPI= `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

    fetch(urlAPI)
    .then(Response => Response.json())
    .then(datosPokemon => mostrarPokemon(datosPokemon, contenedorNumero))
    .catch(() => mostrarError(contenedorNumero))
}

//Mostrar info del Pokemon
function mostrarPokemon(datosPokemon, contenedorNumero){
    let info_div_id = `pokemonInfo${contenedorNumero}`;
    let infoDiv = document.getElementById(info_div_id);

    infoDiv.innerHTML = `
        <h2 class="pk-name">${datosPokemon.name.toUpperCase()}</2>
        <img class="pk-img" src="${datosPokemon.sprites.other["official-artwork"].front_default}"></img>
        <p><strong>Número:</strong> ${datosPokemon.id}</p>
        <p><strong>Peso:</strong>   ${datosPokemon.weight/10} Kg</p>
        <p><strong>Altura:</strong> ${datosPokemon.height/10}m</p>
    `
}

//Error en busqueda de Pokemon

function mostrarError(contenedorNumero){
    let info_div_id = `pokemonInfo${contenedorNumero}`;
    let infoDiv = document.getElementById(info_div_id);
    infoDiv.innerHTML = `
    <p class="pk-msg"> Pokémon no encontrado. <br> Intenta con otro nombre o numero </p>
    `
}

//Mostrar pokemon inicial

window.onload = function(){
    document.getElementById("pokemonInput1").value = "300";
    buscarPokemon(1);
    document.getElementById("pokemonInput2").value = "150";
    buscarPokemon(2);
}