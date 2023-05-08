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
    let objt = list[id]
    console.log(id)
    let newagents = new agents(objt.displayName, objt.fullPortrait, objt.description, objt.role.displayName, objt.role.displayIcon, objt.fullPortrait , objt.abilities[0].displayIcon, objt.abilities[1].displayIcon, objt.abilities[2].displayIcon, objt.abilities[3].displayIcon)
    newagents.toDetalle()
}

async function data(id) {
    const response = await fetch('https://valorant-api.com/v1/agents')
    const json = await response.json()
    const data = json.data
    console.log(data)
    crearobt(data,id)
}


data(id)
