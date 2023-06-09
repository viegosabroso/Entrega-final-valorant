const titulo = document.getElementById("jett")
const description = document.getElementById("textolargo")
const role = document.getElementById("textito")
const roleIcon = document.getElementById("roleIcon")
const imgCharacter = document.getElementById("imgCharacter")
const qImg = document.getElementById("q")
const eImg = document.getElementById("e")
const cImg = document.getElementById("c")
const xImg = document.getElementById("x")

const params = new URLSearchParams(window.location.search)
const id = params.get("id")

console.log(id)

function crearobt(list,id) {
    console.log(id)
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (element.uuid === id) {
            console.log("Encontro el personaje")
            console.log(element)
            let newagents = new agents(element.uuid,element.displayName, element.fullPortrait, element.description, element.role.displayName, element.role.displayIcon, element.fullPortrait , element.abilities[0].displayIcon, element.abilities[1].displayIcon, element.abilities[2].displayIcon, element.abilities[3].displayIcon)
            newagents.toDetalle()
            break
        }
    }
    
}

async function data(id) {
    const response = await fetch('https://valorant-api.com/v1/agents')
    const json = await response.json()
    const data = json.data
    console.log(data)
    crearobt(data,id)
}


data(id)
