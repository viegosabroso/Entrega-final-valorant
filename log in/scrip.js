const error = document.getElementById("error")
const email = document.getElementById("button")
const contraseña = document.getElementById("button2")


function login(){
const error = document.getElementById("error")
const email = document.getElementById("button")
const contraseña = document.getElementById("button2")


    if(email.value === ""||contraseña.value ===""){
    error.innerHTML = "Empty Fields"
    
}else if(email.value !=='Thomasmedina@hotmail.com'){
        error.innerHTML = "Invalid Email"

    }else if(contraseña.value !== 'pancacho123'){
        error.innerHTML = "Incorrect Password"

    }else{
    window.location.href = "../Agentes/index.html"

    }
}

