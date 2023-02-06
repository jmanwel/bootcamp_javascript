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

*/
const API_KEY_THE_MOVIE_DB = "";
const BASE_URL_THE_MOVIE_DB = "https://api.themoviedb.org/3";
const row = document.querySelector('.row');
const URL_THE_MOVIE_DB_ON_SCREEN = `${BASE_URL_THE_MOVIE_DB}/movie/now_playing?api_key=${API_KEY_THE_MOVIE_DB}&language=en-US&page=1`;
const button_search = document.querySelector("#button_search");
const logon = document.querySelector("#logon");
const login = document.querySelector("#login");
const logout = document.querySelector("#logout");
const user_hello = document.querySelector("#user_hello");
const go_to_fav = document.querySelector("#fav");
const go_to_pend = document.querySelector("#pend");

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
    let heart = document.querySelector(".fa-heart");
    let bell = document.querySelector(".fa-bell");
    let p_data_money = document.querySelector("#modal_p_data_money");
    let existing = JSON.parse(localStorage.getItem(localStorage.getItem("user_active")));    
    getDataFromUrl(url_details).then((json)=>{
        h5.textContent = json.title;
        img.src = `https://image.tmdb.org/t/p/w300/${json.poster_path}`;
        img.alt = json.tagline;
        a.href = json.homepage;
        p.textContent = json.overview;
        p_data.textContent = `Language: ${json.original_language} | Released on: ${json.release_date} | Popularity: ${json.popularity}`;
        p_data_money.textContent = `Budget: ${json.budget} | Revenue on: ${json.revenue}`;
        if (existing.fav.includes(id)){
            heart.classList.add('text-danger');
        }
        else{
            heart.classList.remove('text-danger');
        }
        if (existing.pending.includes(id)){
            bell.classList.add('text-warning');
        }else{
            bell.classList.remove('text-warning');
        }
        heart.addEventListener('click', (e) => {
            if (!existing.fav.includes(id)){
                existing.fav.push(id);
                localStorage.setItem(localStorage.getItem("user_active"), JSON.stringify(existing));
                alertify.success('Succesfully added to fav');
                
            }
            else{
              existing.fav =  existing.fav.filter(i => i != id);
              localStorage.setItem(localStorage.getItem("user_active"), JSON.stringify(existing));
              alertify.success('Succesfully deleted to fav');

            }
        e.preventDefault();
        });
        bell.addEventListener('click', (e) => {
            if (!existing.pending.includes(id)){
                existing.pending.push(id);
                localStorage.setItem(localStorage.getItem("user_active"), JSON.stringify(existing));
                alertify.success('Succesfully added to pend');
                
            }
            else{
              existing.pending =  existing.pending.filter(i => i != id);
              localStorage.setItem(localStorage.getItem("user_active"), JSON.stringify(existing));
              alertify.success('Succesfully deleted to pend');
            }
        e.preventDefault();
        });
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

go_to_fav.addEventListener('click', (e) => {
    let fav_array_id = JSON.parse(localStorage.getItem(localStorage.getItem("user_active"))).fav;
    if (fav_array_id.length > 0){
        row.textContent = "";        
        for (let i=0; i< fav_array_id.length;i++){   
            let url_details_fav = `${BASE_URL_THE_MOVIE_DB}/movie/${fav_array_id[i]}?api_key=${API_KEY_THE_MOVIE_DB}`;
            getDataFromUrl(url_details_fav).then((j)=>{
                let div = document.createElement("div");
                div.classList.add('card', 'd-flex', 'justify-content-between');
                let p = document.createElement("p");
                p.setAttribute('hidden', 'hidden');
                p.textContent = j.id;
                let a = document.createElement("a");
                a.classList.add('w-50', 'text-dark');
                a.textContent = j.original_title;
                a.href = "some";
                a.target = "_blank";
                a.setAttribute("onclick", `showDetails(${j.id})`);
                a.setAttribute("data-bs-toggle", "modal"); 
                a.setAttribute("data-bs-target", "#exampleModal");
                let img = document.createElement("img");        
                img.src = `https://image.tmdb.org/t/p/w500/${j.poster_path}`;
                div.append(img);
                div.append(a);
                div.append(p);
                row.append(div);
            });
        }
    }else{
        alertify.error('No fav to show');
    }
    e.preventDefault();
});

go_to_pend.addEventListener('click', (e) => {
    let pend_array_id = JSON.parse(localStorage.getItem(localStorage.getItem("user_active"))).pending;
    if (pend_array_id.length > 0) {
        row.textContent = "";        
        for (let i=0; i< pend_array_id.length;i++){   
            let url_details_pend = `${BASE_URL_THE_MOVIE_DB}/movie/${pend_array_id[i]}?api_key=${API_KEY_THE_MOVIE_DB}`;            
            getDataFromUrl(url_details_pend).then((j)=>{
                let div = document.createElement("div");
                div.classList.add('card', 'd-flex', 'justify-content-between');
                let p = document.createElement("p");
                p.setAttribute('hidden', 'hidden');
                p.textContent = j.id;
                let a = document.createElement("a");
                a.classList.add('w-50', 'text-dark');
                a.textContent = j.original_title;
                a.href = "some";
                a.target = "_blank";
                a.setAttribute("onclick", `showDetails(${j.id})`);
                a.setAttribute("data-bs-toggle", "modal"); 
                a.setAttribute("data-bs-target", "#exampleModal");
                let img = document.createElement("img");        
                img.src = `https://image.tmdb.org/t/p/w500/${j.poster_path}`;
                div.append(img);
                div.append(a);
                div.append(p);
                row.append(div);
            });
        }
    } else{
        alertify.error('No pend to show');
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
          if (localStorage.getItem("user_active") != ""){
            showElements(JSON.parse(localStorage.getItem(localStorage.getItem("user_active"))).name);       
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
            const h1 = document.querySelector("h1");
            h1.textContent = "";
            existing.active = 1;
            localStorage.setItem(loginEmail.value, JSON.stringify(existing));
            localStorage.setItem("user_active", loginEmail.value);
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
    if (localStorage.getItem("user_active") != ""){
        let existing = JSON.parse(localStorage.getItem(localStorage.getItem("user_active")));
        existing.active = 0;
        localStorage.setItem(localStorage.getItem("user_active"), JSON.stringify(existing));
        fav.setAttribute('hidden', 'hidden');       
        pend.setAttribute('hidden', 'hidden');       
        logout.setAttribute('hidden', 'hidden');       
        logon.removeAttribute('hidden');       
        login.removeAttribute('hidden');       
        user_hello.setAttribute('hidden', 'hidden');       
        user_hello.textContent = "";
        localStorage.setItem("user_active", "");
        alertify.success('User successfully logout');
        row.textContent = "";
        h1.textContent = "Login/Logon for more fun!";
      }
      else{
        alertify.error('No user logged');
      }  
    e.preventDefault();
});