//Crea una función que reciba un array de strings y devuelva un array con las 
//strings ordenadas alfabéticamente de menor a mayor.
const letters = ['b','f','z','t','r'];
function sortStrings(l){
    return l.sort();
}

console.log(sortStrings(letters));

//Dado el siguiente array de numeros, crea una función que devuelva un array sin los números duplicados.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function noDuplicates(n){
    let new_array = [...new Set(n)];
    return new_array;
}

console.log(noDuplicates(numbers));

// Dado el siguiente array de objetos, crea una función que devuelva un array sin los objetos duplicados.

const users = [
    {name: 'Juan',age: 25,city: 'Madrid',hobbies: ['fútbol', 'poker', 'programar'],},
    {name: 'María',age: 30,city: 'Barcelona',hobbies: ['pintar', 'leer', 'programar'],},
    {name: 'Pedro',age: 20,city: 'Madrid',hobbies: ['fútbol', 'programar'],},
    {name: 'Laura',age: 35,city: 'Barcelona',hobbies: ['pintar', 'leer', 'programar'],},
    {name: 'Pablo',age: 27,city: 'Madrid',hobbies: ['fútbol', 'poker', 'programar'],},
    {name: 'Juan',age: 25,city: 'Madrid',hobbies: ['fútbol', 'poker', 'programar'],},
    {name: 'María',age: 30,city: 'Barcelona',hobbies: ['pintar', 'leer', 'programar'],},
    {name: 'Pedro',age: 20,city: 'Madrid',hobbies: ['fútbol', 'programar'],},
    {name: 'Laura',age: 35,city: 'Barcelona',hobbies: ['pintar', 'leer', 'programar'],},
    {name: 'Pablo',age: 35,city: 'Madrid',hobbies: ['fútbol', 'poker', 'programar'],},
];


function getUniqueListObj(arr) {
    const ids = arr.map(o => o.name);
    const set_names = [...new Set(ids)];
    let filtered =[];
    for (i of set_names){
        index = set_names.indexOf(i);
        filtered.push(arr[index]);
    }
    return filtered;
}

console.log(getUniqueListObj(users));