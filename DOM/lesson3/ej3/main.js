/*
Ejercicio 3
Teniendo en cuenta el siguiente HTML

<section>
      <div class="color-container">
        <h2 class="color-code">#000000</h2>
      </div>
      <button class="btn">Cambiar color</button>
</section>

Quiero que consigas hacer esto: Cambiar el color del div con la clase "color-container" y escribir el 
código de color en el interior. 
*/

function generate_hex_random_value(){
    hex = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
    random_color = "#";
    for (i=0;i<6;i++){
       pos_array = Math.floor(Math.random() * (hex.length - 0));
        random_color += hex[pos_array];
    }
    return random_color
}

const div = document.querySelector(".color-container");
const h2 = document.querySelector(".color-code");
const button = document.querySelector(".btn");

button.addEventListener('click', (e) => {
    let c = generate_hex_random_value();
    div.style.backgroundColor = c;
    h2.textContent = c;
    e.preventDefault();
});