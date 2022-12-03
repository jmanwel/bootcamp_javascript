/*Ejercicio 1
Teniendo en cuenta el siguiente array de objetos

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false }];

    Crea una lista no ordenada con el nombre de cada usuario.
    Resalta con el background-color gold a los usuarios premium.
    Añade también el atributo title con el valor Usuario premium a los usuarios premium.
*/

const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }];


var ul = document.createElement("ul");
for (let i =0; i<users.length; i++){
    var li = document.createElement("li");
    var p = document.createElement("p");
    var content = users[i].name;
    if (users[i].isPremium == true){
        li.style.cssText = 'background-color: gold;';
        li.setAttribute('title', 'User-premium');
        console.log(li.attributes);
    }
    p.appendChild(document.createTextNode(content));
    ul.appendChild(li).appendChild(p);
}
document.body.appendChild(ul);


