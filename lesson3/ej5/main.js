


const users = [
    {name: 'Juan',age: 25,city: 'Madrid',hobbies: ['fútbol', 'poker', 'programar'],},
    {name: 'María',age: 30,city: 'Barcelona',hobbies: ['pintar', 'leer', 'programar'],},
    {name: 'Pedro',age: 20,city: 'Madrid',hobbies: ['fútbol', 'programar'],},
    {name: 'Laura',age: 35,city: 'Barcelona',hobbies: ['pintar', 'leer', 'programar'],},
    {name: 'Pablo',age: 27,city: 'Madrid',hobbies: ['fútbol', 'poker', 'programar'],},
];

// Crea una función que devuelva un array con los nombres de las personas que viven en Madrid.
function whoLivesInMadrid(u){
    let madrid_array = [];
    for (const i of u){
            if (i['city']=='Madrid'){
                madrid_array.push(i['name']);
            }
    }
    return madrid_array;
}

console.log(whoLivesInMadrid(users));

// Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años.
function olderThan25(u){
    let twenty_five_array = [];
    for (const i of u){
            if (i['age'] > 25){
                twenty_five_array.push(i['name']);
            }
    }
    return twenty_five_array;
}

console.log(olderThan25(users));

// Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años y que vivan en Madrid.
function olderThan25AndLivingInMadrid(u){
    let two_conditions_array = [];
    for (const i of u){
            if (i['age'] > 25 && i['city']=='Madrid'){
                two_conditions_array.push(i['name']);
            }
    }
    return two_conditions_array;
}

console.log(olderThan25AndLivingInMadrid(users));

// Encuentra la primera persona que le guste programar.
function foundFirstProgramer(u){
    let foundProgramer = '';
    for (const i of u){
        for (const j of i['hobbies']){
            if (j == 'programar'){
                return i;
            }
    };
    }
    return 'Nobody';
}
console.log(foundFirstProgramer(users));

// Haz la suma de todas las edades de las personas.
function sumAges(u){
    let total_ages = 0;
    for (const i of u){
        total_ages = total_ages + i['age'];
    }
    return total_ages;
}
console.log(sumAges(users));

// Crea un nuevo array solo con la ciudad de cada persona y su primer hobby. La estructura del array debe ser:

let new_array = [];

for (const i of users){
    const n = {};
    n['city'] = i['city'];
    n['hobby'] = i['hobbies'][0];
    new_array.push(n);
}

console.log(new_array);


