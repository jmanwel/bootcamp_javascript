/*Ejercicio 1

Teniendo en cuenta el siguiente HTML

<div class="app">
    <p>Soy un párrafo</p>
    <p>Soy otro párrafo</p>
</div>

    a)Crea una imagen con el atributo src con el valor https://via.placeholder.com/150 
    y el atributo alt con el valor Imagen de ejemplo.
    b)Inserta la imagen dentro del div con la clase app.
    c)¿Podrías insertar la imagen antes del primer párrafo? Toca investigar.
    Si, con insertAdjacentElement() y el parámetro afterbegin.
    d)¿Podrías insertar la imagen entre los dos párrafos?
    No
*/

const div = document.querySelector('.app');
const img = document.createElement('img');
img.src = 'https://via.placeholder.com/150';
img.alt = 'Imagen de ejemplo';
// div.append(img);
div.insertAdjacentElement("afterbegin", img);

