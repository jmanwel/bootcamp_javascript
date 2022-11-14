const people= [
    { name: 'Juan', age: 18 },
    { name: 'María', age: 16 },
    { name: 'Pedro', age: 20 },
    { name: 'Pablo', age: 15 },
    { name: 'Laura', age: 19 },
];

function older(people){
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

