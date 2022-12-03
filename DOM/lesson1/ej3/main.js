/*Ejercicio 3

Crea un cuadrado de 100x100px con el color de fondo red y el color de texto white con el texto: 
"Soy un cuadrado en el centro".

Cada vez que se recargue la página el cuadrado debe tener un color de fondo aleatorio de entre los siguientes: 
red, green, blue, yellow, pink, purple, orange.
Si el color de fondo es red, green o blue el tamaño del cuadrado debe ser de 100x100px, 
si es yellow, pink o purple el tamaño del cuadrado debe ser de 200x200px 
y si es orange el tamaño del cuadrado debe ser de 300x300px.
*/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

const div = document.querySelector('div');

var option = getRandomInt(1,8);
switch (option) {
    case 1:
        div.classList.toggle('red');
        break;
    case 2:
        div.classList.toggle('green');
        break;
    case 3:
        div.classList.toggle('blue');
        break;
    case 4:
        div.classList.toggle('yellow');
        break;
    case 5:
        div.classList.toggle('pink');
        break;
    case 6:
        div.classList.toggle('purple');
        break;
    case 7:
        div.classList.toggle('orange');
        break;  
    }

