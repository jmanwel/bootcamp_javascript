/*Ejercicio 1
Teniendo en cuenta el siguiente HTML

<p>Este es el primer párrafo</p>
<p class="parrafo">Este es el segundo párrafo</p>
<p>Este es el tercer párrafo</p>

    a)Muestra en la consola el texto de cada uno de los párrafos.
    b)Muestra en la consola el texto de cada uno de los párrafos que tengan la clase parrafo.
    c)Modifica el texto de cada uno de los párrafos que tengan la clase parrafo por "Hola Mundo".
    d)Cambia el color de fondo de cada uno de los párrafos que tengan la clase parrafo por red.
    f)Añade un span con el texto "Infiltrado" al final de cada uno de los párrafos que tengan la clase parrafo.

*/
//a)
const p = document.querySelectorAll('p');
for (let i=0; i<p.length; i++){
    console.log(p[i].innerText);
}

console.log("---------------------------");
//b)
const paragraph = document.getElementsByClassName('parrafo');
for (let i=0; i<paragraph.length; i++){
    console.log(paragraph[i].textContent);
}

console.log("---------------------------");
//c)
const paragraph2 = document.getElementsByClassName('parrafo');
for (let i=0; i<paragraph2.length; i++){
    paragraph2[i].textContent = "Hello world!";
    console.log(paragraph2[i].textContent);
}

console.log("---------------------------");
//d)
const paragraph3 = document.getElementsByClassName('parrafo');
for (let i=0; i<paragraph3.length; i++){
    paragraph3[i].style.cssText = 'background-color: red;';    
}

console.log("---------------------------");
//f)
const paragraph4 = document.getElementsByClassName('parrafo');
for (let i=0; i<paragraph4.length; i++){
    let text = paragraph4[i].textContent;
    paragraph4[i].innerHTML = '<p>' + paragraph[i].textContent + '</p>' + '<span>Infiltrado</span>';
}