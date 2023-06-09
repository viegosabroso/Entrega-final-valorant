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

var userdataVal = localStorage.getItem("userdataVal")
        console.log(userdataVal)
        var userdataValJSON = JSON.parse(userdataVal)

    if(email.value === ""||password.value ===""||user.value ===""||nickname.value ===""||confirm.value ===""){
    error.innerHTML = "Empty Fields"
    
    }else if(confirm.value !== password.value){
        error.innerHTML = "Incorrect Password"

    }else if(buscarCorreo(email.value, userdataValJSON)){
        error.innerHTML = "Correo ya esta en uso"
    }else{
        
        if (userdataVal === null) {
            console.log("Entro a la condicion userdataVal null")
            var userdataValJSON = []
            var newUser = {
                email: email.value,
                password: password.value,
                user: user.value,
                nickname: nickname.value,
                favorites: [
                ]
            }

            userdataValJSON.push(newUser)

            userdataValString = JSON.stringify(userdataValJSON)

            localStorage.setItem("userdataVal", userdataValString)

            alert('Registro exitoso'); 
            window.location.href = "../log in/login.html";

        } else {
            console.log("Entro a la condicion userdataVal existe")
            var newUser = {
                email: email.value,
                password: password.value,
                user: user.value,
                nickname: nickname.value,
                favorites: [
                ]
            }

            userdataValJSON.push(newUser)

            userdataValString = JSON.stringify(userdataValJSON)

            localStorage.setItem("userdataVal", userdataValString)

            alert('Registro exitoso');
            window.location.href = "../log in/login.html";
        }

    }
}
function buscarCorreo(email, userdataVal) {
    if (userdataVal === null) {
        return false
    }else {
        console.log("Entro a la funcion buscaarcorreo")
    for (let i = 0; i < userdataVal.length; i++) {
        var user = userdataVal[i];

        if (user.email === email) {
            console.log(user.email)
            console.log("El correo ya esta registrado")
            return true
        }

    }

    return false
    }

}
