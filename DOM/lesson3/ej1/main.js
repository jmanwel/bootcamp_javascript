/*
Ejercicio 1

    Crea un formulario con un input de tipo text y un botón de tipo submit.
    Crea un párrafo vacío debajo del formulario.
    Al hacer click en el botón submit, pinta en el párrafo el texto que hay en el input.
    Si el texto del input es menor de 5 caracteres, pinta el texto en rojo.
    Al hacer click en el botón submit, vacía el input.
*/

const paragraph = document.querySelector("#p");
const input = document.querySelector("#t");
const button = document.querySelector("#b");

paragraph.classList.add('text-center');

button.addEventListener('click', (e) => {
    t = input.value;
    if(t.length >=5){
        paragraph.textContent = t;
        input.value = "";
    }
    else{
        input.style.backgroundColor = 'red';
    }
    e.preventDefault();
  });