/*Ejercicio 3

Teniendo en cuenta el siguiente template de una tarjeta de usuario y el siguiente array de objetos

<template>
    <div class="card">
        <img src="https://via.placeholder.com/150" alt="Imagen de ejemplo" />
        <h2>Nombre</h2>
        <p>Descripción</p>
    </div>
    <style>
        .card {
            width: 300px;
            height: 300px;
            border: 1px solid gray;
            border-radius: 5px;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        .card img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    </style>
</template>

    Crea una card para cada usuario.
    Como atributo alt de la imagen, quiero que se le añada el nombre del usuario.
    Puedes usar los estilos que están en el template o crear tus propios estilos. 
    Además organiza el código CSS como creas conveniente.
*/

const users = [
    {name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      img: 'https://randomuser.me/api/portraits/men/38.jpg'},
    {name: 'Jane Doe',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      img: 'https://randomuser.me/api/portraits/women/74.jpg'},
    {name: 'John Smith',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      img: 'https://randomuser.me/api/portraits/men/32.jpg'},
    {name: 'Jane Smith',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      img: 'https://randomuser.me/api/portraits/women/92.jpg'}
  ];

const template = document.querySelector('template');

for (let i=0; i < users.length; i++){
    const img = template.content.querySelector('img');
    const h2 = template.content.querySelector('h2');
    const p = template.content.querySelector('p');
    img.src = users[i].img;
    img.alt = users[i].name;
    h2.textContent = users[i].name;
    p.textContent = users[i].description;
    const clone = template.content.cloneNode(true);
    document.body.append(clone);
}

