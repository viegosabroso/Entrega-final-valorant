const tarjeta = document.getElementById("contenedorTarjeta")

async function data() {

    const response = await fetch ('https://valorant-api.com/v1/agents')
    
    const json = await response.json()
    
    const data = json.data
    crearobt(data)
    }

    data()
    function crearobt(list){
        for(let i = 0; i < 3; i++){
            if(i !==8 ){
                let objt = list[i]
                let newagents = new agents (objt.id,objt.displayName,objt.fullPortrait)
                tarjeta.innerHTML += newagents.tohtml()
            }
        }
    }

    function selected(pos){
        let objt = list[pos]
        console.log(objt)
    }