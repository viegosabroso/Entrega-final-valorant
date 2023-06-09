const error = document.getElementById("error")
const email = document.getElementById("button")
const contraseña = document.getElementById("button2")

var userdataVal = localStorage.getItem("userdataVal")
        var userdataValJSON = JSON.parse(userdataVal)
        console.log(userdataValJSON)

function login(){
const error = document.getElementById("error")
const email = document.getElementById("button")
const contraseña = document.getElementById("button2")

    if(email.value === ""||contraseña.value ===""){
    error.innerHTML = "Empty Fields"
    
}for (let i = 0; i < userdataValJSON.length; i++) {
    const user = userdataValJSON[i];
    if (user.email === email.value) {
        userdataVal = user
    } else {
        error.innerHTML = 'El usuario no esta registrado'
        return
    }

}

if (contraseña.value === userdataVal.password) {
    alert('Inicio de sesión exitoso!');
    var userString = JSON.stringify(userdataVal)
    localStorage.setItem("Usuariologeado", userString)
    window.location.href = "../Agentes/index.html";
} else {
    error.innerHTML = 'Nombre de usuario o contraseña incorrectos'


}}

