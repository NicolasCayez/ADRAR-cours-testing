import './style.css'

const pokemonListe = document.getElementById('pokeListe');
console.log(pokemonListe);
const pokemonApiContact = async () => {
    const pokemonData = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log('pokemonData',pokemonData);
    const pokemonDataTransformed = await pokemonData.json();
    console.log('pokemonDataTransformed',pokemonDataTransformed);
    console.log(pokemonDataTransformed.results[0].name);
    for(let i=0;i<pokemonDataTransformed.results.length;i++){
        let listElement = document.createElement('p');
        listElement.innerText = pokemonDataTransformed.results[i].name;
        pokemonListe.append(listElement);
    }
};
pokemonApiContact();