var Usuariologeado = localStorage.getItem("Usuariologeado")
var UsuariologeadoJSON = JSON.parse(Usuariologeado)
console.log(UsuariologeadoJSON)

var nickname = document.getElementById("nickname")
var email = document.getElementById("email")
var password = document.getElementById("password")

nickname.innerHTML = UsuariologeadoJSON.nickname
email.value = UsuariologeadoJSON.email
password.value = Usuariologeado.password

function logOut() {
    localStorage.removeItem("Usuariologeado")
    window.location.href = "../log in/login.html"
}