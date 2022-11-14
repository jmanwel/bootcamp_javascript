

console.log("Ej 7.1\n");
const double_num = (n) => {
    console.log(n*2);
}

double_num(5);
double_num(6);
double_num(7);
double_num(2);

console.log("Ej 7.2\n");
const square_num = (n) => {
    console.log(n**2);
}

square_num(2);
square_num(3);
square_num(4);
square_num(5);

console.log("Ej 7.3\n");
const calc_area = (b, h) =>{
    console.log((b*h)/2);
}

calc_area(2,3);

console.log("Ej 7.4\n");
const odd_number = (n) => {
    if (n%2 == 0){
        console.log(n + " is odd number");
    }else{
        console.log(n + " is even number");
    }
}

odd_number(2);
odd_number(3);
odd_number(4);
odd_number(5);

console.log("Ej 7.5\n");
const people= [
    { name: 'Juan', age: 18 },
    { name: 'María', age: 16 },
    { name: 'Pedro', age: 20 },
    { name: 'Pablo', age: 15 },
    { name: 'Laura', age: 19 },
];

const older = (people) => {
    for (let i=0; i < people.length; i++){
        if (people[i].age < 18){
            console.log(people[i].name + " is older");
        }else{
            console.log(people[i].name + " is younger");
        }
    }
}

var age_array = [];
for (let i=0; i < people.length; i++){
    age_array.push(people[i].age);
}

older(people);
console.log("The older people has: " + Math.max(...age_array) + " years");
console.log("The younger people has: " + Math.min(...age_array) + " years");

console.log("Ej 7.6\n");
const pokemons= [
    { name: 'pk1', element: 'fire' },
    { name: 'pk2', element: 'iron' },
    { name: 'pk3', element: 'water' },
    { name: 'pk4', element: 'fire' },
    { name: 'pk5', element: 'air' },
];

const show_pokemon_name = (pokemons) => {
    for (let i=0; i < pokemons.length; i++){
        console.log(pokemons[i].name);
    }
}

const show_pokemon_name_if_fire = (pokemons) => {
    for (let i=0; i < pokemons.length; i++){
        if (pokemons[i].element == 'fire'){
            console.log(pokemons[i].name);
        }
    }
}

show_pokemon_name(pokemons);
console.log("=================================");
show_pokemon_name_if_fire(pokemons);

