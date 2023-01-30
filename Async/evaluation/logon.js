const register = document.querySelector("#register");
let container = document.querySelector(".container");
let pswrd = document.querySelector("#myPassword");
let show = document.querySelector(".show");


function Strenght(password) {
    let i = 0;
    if (password.length >= 4) {
      i++;
    }
    if (password.length >= 8) {
      i++;
    }
    if (password.length >= 10) {
      i++;
    }
    if (/[A - Z]/.test(password)) {
      i++;
    }
    if (/[1 - 9]/.test(password)) {
      i++;
    }
    if (/[A-Za-z0-3]/.test(password)) {
      i++;
    }
    return i;
  }

document.addEventListener("keyup", function (e) {
  let password = document.querySelector("#myPassword").value;

  let strenght = Strenght(password);
  if (strenght <= 2) {
    container.classList.add("weak");
    container.classList.remove("medium");
    container.classList.remove("strong");
  } else if (strenght >= 2 && strenght <= 4) {
    container.classList.remove("weak");
    container.classList.add("medium");
    container.classList.remove("strong");
  } else {
    container.classList.remove("weak");
    container.classList.remove("medium");
    container.classList.add("strong");
  }
  e.preventDefault();
});

show.onclick = function () {
  if (pswrd.type === "password") {
    pswrd.setAttribute("type", "text");
    show.classList.add("hide");
  } else {
    pswrd.setAttribute("type", "password");
    show.classList.remove("hide");
  }
};

function validateMail(m) {
  let error_message = "Please, enter a valid mail";
  const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (m.match(mailRegex)){
    if (!JSON.parse(localStorage.getItem(m))){
      return true;
    }
    error_message = "Mail already exists";    
  }
  alertify.error(error_message);
  return false;
}

function validatePass (p, rp) {
  if (p === rp){
    return true;
  }
  alertify.error('Password and re-password mismatch');
  return false;
}

register.addEventListener('click', (e) => {
  const pass = document.querySelector("#myPassword").value; 
  const re_pass = document.querySelector("#myRepassword").value;
  const mail = document.querySelector("#myEmail").value; 
  const name = document.querySelector("#name").value; 
  const last_name = document.querySelector("#last_name").value; 
  
  if (mail !="" && pass !="" && re_pass !=""){
        if ( validateMail(mail) && validatePass (pass, re_pass)){
          const timestamp = Date.now();
          const today = new Date(timestamp)
          let init = localStorage.length;
          let user = { "user": mail, "password": pass, 
                       "registered_date": today.toISOString(), 
                       "name": name, "last_name": last_name,
                       "fav": [],"pending": [],
                       "active": 1 
                     } 
          localStorage.setItem(user.user, JSON.stringify(user));
          let final = localStorage.length;     
          if (final > init){
            alertify.success("Data successfully stored");
          }
          else{
            alertify.error("Something went wrong, please try again");
          }
          window.location.href = "index.html";
        }
  }
  else {
      alertify.error('All fields are required!');
  }    
  e.preventDefault();
});