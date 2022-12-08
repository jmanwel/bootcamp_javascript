/*Ejercicio 2

Teniendo en cuenta el siguiente array de objetos

    Crea 2 listas, una para carnívoros y otra para herbívoros.
    Intenta evitar el reflow a la hora de añadir elementos a las listas.
    Quiero que se le añada la clase carnivore a los carnívoros y la clase herbivore a los herbívoros.
    A los carnívoros quiero que se les añada un emoji 🍖 y a los herbívoros 🌱. Al final de cada nombre.
*/

const animals = [
    { name: 'Lion King', isCarnivore: true },
    { name: 'Plant', isCarnivore: false },
    { name: 'Ant', isCarnivore: true },
    { name: 'Bee', isCarnivore: true },
    { name: 'Mouse', isCarnivore: true }
  ];

let carnivore = [];
let herbivore = [];

for (let i=0; i < animals.length; i++){
    if (animals[i].isCarnivore == true){
        carnivore.push(animals[i].name);
        animals[i].name = animals[i].name + " 🍖";
        animals[i].class = "carnivore";
    }
    else{
        herbivore.push(animals[i].name);
        animals[i].name = animals[i].name + " 🌱";
        animals[i].class = "herbivore";
    }
}

console.log(animals);
console.log(carnivore);
console.log(herbivore);
