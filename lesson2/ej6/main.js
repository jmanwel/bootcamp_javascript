const pokemons= [
    { name: 'pk1', element: 'fire' },
    { name: 'pk2', element: 'iron' },
    { name: 'pk3', element: 'water' },
    { name: 'pk4', element: 'fire' },
    { name: 'pk5', element: 'air' },
];

function show_pokemon_name(pokemons){
    for (let i=0; i < pokemons.length; i++){
        console.log(pokemons[i].name);
    }
}

function show_pokemon_name_if_fire(pokemons){
    for (let i=0; i < pokemons.length; i++){
        if (pokemons[i].element == 'fire'){
            console.log(pokemons[i].name);
        }
    }
}

show_pokemon_name(pokemons);
console.log("=================================");
show_pokemon_name_if_fire(pokemons);

