/*
Tus películas 🎥
En este proyecto vas a crear una aplicación web que permita lo siguiente:

* Ver un listado de películas actuales (en cartelera), con su título, imagen y sinopsis.
* Tener un buscador de películas, que permita buscar por título.
* Marcar películas como favoritas para un usuario y poder verlas en un listado de favoritos.
* Marcar películas como pendientes para un usuario y poder verlas en un listado de pendientes.
* Ver el detalle de una película, con su título, imagen, sinopsis, fecha de estreno, duración, 
género, idioma, país de origen, presupuesto, recaudación, y un listado de actores y actrices 
que participan en ella.

A nivel más técnico, la aplicación debe cumplir los siguientes requisitos:
* Debe estar desarrollada sin frameworks, usando únicamente HTML, CSS y JavaScript. 
* El diseño debe ser responsive, y debe funcionar correctamente en dispositivos móviles.
* El código debe estar separado en módulos y seguir una estructura consistente.
* Se deben controlar todos los posibles errores que puedan surgir en la aplicación, 
avisando al usuario de los mismos.

function setFav(title) {}
function setPend(title) {}

PAGINACION
IDENTIFICAR PROXIMOS ESTRENOS

*/
const API_KEY_THE_MOVIE_DB = "c05918447e59efae982725f11c9894ea";
const BASE_URL_THE_MOVIE_DB = "https://api.themoviedb.org/3";
const row = document.querySelector('.row');
const URL_THE_MOVIE_DB_ON_SCREEN = `${BASE_URL_THE_MOVIE_DB}/movie/now_playing?api_key=${API_KEY_THE_MOVIE_DB}&language=en-US&page=1`;
const button_search = document.querySelector("#button_search");
const logon = document.querySelector("#logon");
const login = document.querySelector("#login_b");
const logout = document.querySelector("#logout");
const fav = document.querySelector("#fav");
const pend = document.querySelector("#pend");
const user_hello = document.querySelector("#user_hello");

async function getDataFromUrl(u){
    try {
        const response = await fetch (u);
        const data = await response.json();
        return data;
        } catch (error) {
        console.log('Something wrong => ' + error.message);
    }    
}

function renderNodesInHtml (json) {
    for (let i=0; i < 20; i++){
        if (json.results[i]){
            let div = document.createElement("div");
            div.classList.add('card', 'd-flex', 'justify-content-between');
            let p = document.createElement("p");
            p.setAttribute('hidden', 'hidden');
            p.textContent = json.results[i].id;
            let a = document.createElement("a");
            a.classList.add('w-50', 'text-dark');
            a.textContent = json.results[i].original_title;
            a.href = "some";
            a.target = "_blank";
            a.setAttribute("onclick", `showDetails(${json.results[i].id})`);
            a.setAttribute("data-bs-toggle", "modal"); 
            a.setAttribute("data-bs-target", "#exampleModal");
            let img = document.createElement("img");        
            img.src = `https://image.tmdb.org/t/p/w500/${json.results[i].poster_path}`;
            div.append(img);
            div.append(a);
            div.append(p);
            row.append(div);
        }   
    }
}

function showNowPlaying () {
    getDataFromUrl(URL_THE_MOVIE_DB_ON_SCREEN).then((j)=>{
        for (let k = 1; k <= j.total_pages; k++){
            let URL_THE_MOVIE_DB_ON_SCREEN_PAGING = `${BASE_URL_THE_MOVIE_DB}/movie/now_playing?api_key=${API_KEY_THE_MOVIE_DB}&language=en-US&page=${k}`;
            getDataFromUrl(URL_THE_MOVIE_DB_ON_SCREEN_PAGING).then((json)=>{
                renderNodesInHtml (json);
            })
        }
    })
}

function showDetails (id){
    url_details = `${BASE_URL_THE_MOVIE_DB}/movie/${id}?api_key=${API_KEY_THE_MOVIE_DB}`;
    let h5 = document.querySelector("#exampleModalLabel");
    let img = document.querySelector("#modal_img");
    let a = document.querySelector("#modal_a");
    let p = document.querySelector("#modal_p");
    let p_data = document.querySelector("#modal_p_data");
    let p_data_money = document.querySelector("#modal_p_data_money");
    getDataFromUrl(url_details).then((json)=>{
        console.log(json)
        h5.textContent = json.title;
        img.src = `https://image.tmdb.org/t/p/w300/${json.poster_path}`;
        img.alt = json.tagline;
        a.href = json.homepage;
        p.textContent = json.overview;
        p_data.textContent = `Language: ${json.original_language} | Released on: ${json.release_date} | Popularity: ${json.popularity}`;
        p_data_money.textContent = `Budget: ${json.budget} | Revenue on: ${json.revenue}`;
    });
}

button_search.addEventListener('click', (e) => {
    let c = document.querySelector("#search_box");
    if (c.value!=""){
        let url_title = `${BASE_URL_THE_MOVIE_DB}/search/movie?api_key=${API_KEY_THE_MOVIE_DB}&query=${c.value}&page=1`;
        row.textContent = "";        
        getDataFromUrl(url_title).then((j)=>{
            for (let k = 1; k <= j.total_pages; k++){
                url_title = `${BASE_URL_THE_MOVIE_DB}/search/movie?api_key=${API_KEY_THE_MOVIE_DB}&query=${c.value}&page=${k}`;
                getDataFromUrl(url_title).then((json)=>{
                    renderNodesInHtml (json);
                });
            }
        });
    }
    else {
        alertify.error('Please, enter a value for search');
    }    
    e.preventDefault();
});

function showElements (u) {
    logon.setAttribute('hidden', 'hidden');       
    login.setAttribute('hidden', 'hidden');       
    logout.removeAttribute('hidden');       
    fav.removeAttribute('hidden');       
    pend.removeAttribute('hidden');       
    user_hello.removeAttribute('hidden');
    user_hello.textContent = `Welcome back ${u}!!`;
}

try {
    for (var a in localStorage) {
        if (JSON.parse(localStorage.getItem(a)).active == 1){
            showElements(JSON.parse(localStorage.getItem(a)).name);       
            var user_active = JSON.parse(localStorage.getItem(a)).user;
            showNowPlaying ();
            break;
        }
    }
  } catch (error) {
    console.error(error);
  }

login.addEventListener('click', (e) => {
    let loginEmail = document.querySelector("#myEmailLogin");
    let loginPass = document.querySelector("#myPasswordLogin");
    if (JSON.parse(localStorage.getItem(loginEmail.value))){
        let existing = JSON.parse(localStorage.getItem(loginEmail.value));
        if (loginPass.value === existing.password ){
            existing.active = 1;
            localStorage.setItem(loginEmail.value, JSON.stringify(existing));
            showElements(existing.name);       
            window.location.href = "index.html";
        }else{
            alertify.error('Password incorrect');
        }
    }else{
        alertify.error('User does not exists');
    }
    e.preventDefault();
});

logout.addEventListener('click', (e) => {
    if (JSON.parse(localStorage.getItem(user_active))){
        let existing = JSON.parse(localStorage.getItem(user_active));
        existing.active = 0;
        localStorage.setItem(user_active, JSON.stringify(existing));
        fav.setAttribute('hidden', 'hidden');       
        pend.setAttribute('hidden', 'hidden');       
        logout.setAttribute('hidden', 'hidden');       
        logon.removeAttribute('hidden');       
        login.removeAttribute('hidden');       
        user_hello.setAttribute('hidden', 'hidden');       
        user_hello.textContent = "";
        alertify.success('User successfully logout');
        row.textContent = "";
      }
      else{
        alertify.error('No user logged');
      }  
    e.preventDefault();
});