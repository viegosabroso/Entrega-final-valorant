const password = document.getElementById("pass")
const user = document.getElementById("user")
const nickname = document.getElementById("nick")
const email = document.getElementById("email") 
const confirm = document.getElementById("conpass")
const boton = document.getElementById("botonCuenta")



function signup(){
const error = document.getElementById("error")
const password = document.getElementById("pass")
const user = document.getElementById("user")
const nickname = document.getElementById("nick")
const email = document.getElementById("email") 
const confirm = document.getElementById("conpass")
const boton = document.getElementById("botonCuenta")

    if(email.value === ""||password.value ===""||user.value ===""||nickname.value ===""||confirm.value ===""){
    error.innerHTML = "Empty Fields"
    
    }else if(confirm.value !== password.value){
        error.innerHTML = "Incorrect Password"

    }else{
    window.location.href = "../log in/login.html"

    }
}

