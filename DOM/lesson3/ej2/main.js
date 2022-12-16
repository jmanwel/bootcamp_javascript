/*
Ejercicio 2

Software para aprender mecanografía.

    Tendrás un párrafo con un texto largo que el usuario deberá escribir.
    Deberás controlar que el usuario escriba el texto correctamente y por cada letra que escriba bien, 
    deberás pintarla de verde en el párrafo.
    Crea los elementos de HTML que necesites, 
    así como los estilos de CSS y por supuesto el código JavaScript.

Como consejo te diré que empieces por lo básico y vayas añadiendo funcionalidades poco a poco. 
Cuando lo acabes puedes añadir extras como temporizador, 
contador de errores y por supuesto carga de palabras dinámica desde un array.
*/

const input = document.querySelector("#t");
var countError = 0;
const span = document.querySelector("#s");
const paragraph = document.querySelector("#p");

paragraph.classList.add('text-center');

input.addEventListener('keyup', (e) => {
    t = input.value;
    let res = /^[a-zA-Z\s*!,.?\-_@()\[\]\\\/]+$/g.test(t);
    if(res){
        input.style.backgroundColor = '';
        //input.style.color = 'green';
        input.classList.add('text-success');
    }
    else{
        input.classList.remove('text-success');
        input.style.backgroundColor = 'red';
        input.style.Color = 'white';
        countError++;
        span.textContent = countError;
        span.classList.add('text-danger');
    }
    e.preventDefault();
  });