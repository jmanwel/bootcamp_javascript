const pokemons= [
    { name: 'pk1', element: 'fire' },
    { name: 'pk2', element: 'iron' },
    { name: 'pk3', element: 'water' },
    { name: 'pk4', element: 'fire' },
    { name: 'pk5', element: 'air' },
];

for (let i=0; i < pokemons.length; i++){
    if (pokemons[i].element == 'fire'){
        console.log(pokemons[i].name + " it's a fire pokemon!!!");
    }
}
