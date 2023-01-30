/*
Ejercicio 3
Teniendo en cuenta estas url:

https://api.github.com/repos/facebook/react
https://api.github.com/repos/angular/angular
https://api.github.com/repos/vuejs/vue

*Crear una función que reciba una url y devuelva una promesa que resuelva con el número de estrellas 
 que tiene el repositorio, número de commits, descripción del repositorio y url del repositorio.
*Mostrar por consola el resultado de cada url.
*Ver si puedes transformarlo a async/await.
*Ver si puedes hacer que se muestre el resultado en el HTML.
Ten en cuenta que github tiene un límite de peticiones sin registrarte por hora, 
así que si no te funciona, prueba con otra url.
 */

const react = 'https://api.github.com/repos/facebook/react';
const angular = 'https://api.github.com/repos/angular/angular';
const vue = 'https://api.github.com/repos/vuejs/vue';

const t1 = document.querySelector("#t1");

list_url = [react, angular, vue];

async function getDataFromUrl(u){
  try {
      const response = await fetch (u);
      const data = await response.json();
      return data;
      } catch (error) {
      console.log('Something wrong => ' + error.message); // Error de prueba
  }    
}

async function run() {
  try {
    for (let i=0; i<list_url.length;i++){
      const result = await getDataFromUrl(list_url[i])
        .then(r =>{ 
          let TrElement = document.createElement("tr");
          let TdStar = document.createElement("td");
          let TdFork = document.createElement("td");
          let TdDesc = document.createElement("td");
          let TdUrl = document.createElement("td");
          TdStar.innerHTML = r.stargazers_count;
	        TrElement.appendChild(TdStar);
          TdFork.innerHTML = r.forks_count;
	        TrElement.appendChild(TdFork);          
          TdDesc.innerHTML = r.description;          
          TrElement.appendChild(TdDesc);          
          TdUrl.innerHTML = r.url;              
	        TrElement.appendChild(TdUrl);
	        t1.appendChild(TrElement);
          console.log(r.stargazers_count);
          console.log(r.forks_count);
          console.log(r.description);
          console.log(r.url);
          console.log("***************");
        })
    }
  } catch (error) {
    console.log(error);
  }
  finally{
    ()=>console.log("--------------")
  }
}

run();