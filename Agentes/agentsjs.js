const tarjeta = document.getElementById("contenedorTarjeta")

var Usuariologeado = localStorage.getItem("Usuariologeado")
var UsuariologeadoJSON = JSON.parse(Usuariologeado)
console.log(UsuariologeadoJSON)
console.log(UsuariologeadoJSON.favorites)

async function data() {

    const response = await fetch ('https://valorant-api.com/v1/agents')
    
    const json = await response.json()
    
    const data = json.data
    crearobt(data)
    }

    data()
    function crearobt(list){
            var agentlist = []

        for(let i = 0; i < list.length; i++){
            if(i !==8 ){
                let objt = list[i]
                let newagents = new agents (objt.uuid,objt.displayName,objt.fullPortrait,objt.description)
                console.log(newagents.id)
                agentlist.push(newagents)
            }
        }
        window.globalagentlist = agentlist
        crearagentes()
    }

function prueba(prueba) {
    console.log(prueba)
    window.location.href=`../Info/index.html?id=${prueba}`
}

    function selected(pos){
        console.log(pos)
        window.location.href=`../Info/index.html?id=${pos}`
    }
    function addFavorite(id) {
        listaFavoritos = UsuariologeadoJSON.favorites
        listaFavoritos.push(id)
        UsuariologeadoJSON["favorites"] = listaFavoritos
        var UsuariologeadoString = JSON.stringify(UsuariologeadoJSON)
        localStorage.setItem("Usuariologeado", UsuariologeadoString)
        var userdataVal = localStorage.getItem("userdataVal")
        var userdataValJSON = userdataVal
        for (let i = 0; i < userdataValJSON.length; i++) {
            const element = userdataValJSON[i];
            if (element.email === UsuariologeadoJSON.email) {
                userdataValJSON[i] = UsuariologeadoJSON
                var newuserdataValString = JSON.stringify(UsuariologeadoJSON)
                localStorage.setItem("userdataVal", newuserdataValString)
            }
        }
        crearagentes()
    }
    function deleteFavorite(id) {
        listaFavoritos = UsuariologeadoJSON.favorites
        for (let i = 0; i < listaFavoritos.length; i++) {
            var favoritesDelete = listaFavoritos[i];
            if (favoritesDelete === id) {
                var favoriteToDelete = i
            }
        }
        listaFavoritos.splice(favoriteToDelete, 1)
        UsuariologeadoJSON["favorites"] = listaFavoritos
        var UsuariologeadoString = JSON.stringify(UsuariologeadoJSON)
        localStorage.setItem("Usuariologeado", UsuariologeadoString)
        var userdataVal = localStorage.getItem("userdataVal")
        var userdataValJSON = userdataVal
        for (let i = 0; i < userdataValJSON.length; i++) {
            const element = userdataValJSON[i];
            if (element.email === UsuariologeadoJSON.email) {
                userdataValJSON[i] = UsuariologeadoJSON
                var newuserdataValString = JSON.stringify(UsuariologeadoJSON)
                localStorage.setItem("userdataVal", newuserdataValString)
            }
        }
        crearagentes()
    }
    function crearagentes(){
        
    var Usuariologeado = localStorage.getItem("Usuariologeado")
    var UsuariologeadoJSON = JSON.parse(Usuariologeado)
    console.log(UsuariologeadoJSON.favorites)

    tarjeta.innerHTML = ""

    for (let i = 0; i < globalagentlist.length; i++) {
        var isFavorite = 0
        element = globalagentlist[i]
        console.log(element.id)
        var listaFavoritos = UsuariologeadoJSON.favorites
        for (let i = 0; i < listaFavoritos.length; i++) {
            var agenteFavorito = listaFavoritos[i];
            if (agenteFavorito === element.id) {
                tarjeta.innerHTML += element.tohtmlFav()
                var isFavorite = 1
                console.log("Creo favoritos")
            }
        }
        if (isFavorite === 0) {
            tarjeta.innerHTML += element.tohtml()
            console.log("Creo NO favoritos")
        }

    }

}
    