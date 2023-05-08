class agents{
    constructor(name,imagen,description,role,roleIcon,fullPortrait,qImg,eImg,cImg,xImg){
        this.name = name 
        this.imagen = imagen
        this.description = description
        this.role = role
        this.roleIcon = roleIcon
        this.fullPortrait = fullPortrait
        this.qImg =qImg 
        this.eImg =eImg 
        this.cImg =cImg 
        this.xImg =xImg
    }
tohtml(pos){
    return`<a href="../Info/index.html?id=${pos}" >
    <div class="tarjeta" id="tarjeta" onclick="selected(${pos})">
    <div class="estrella"><img src="../Agentes/Imagenes/imagen6.png" alt=""></div>
    <div class="imagen2"><img src="${this.imagen}" alt="" height="331px"></div>
    
</div><p class="textoo">${this.name}</p></a>`
}

toDetalle() {
    titulo.innerHTML = this.name
    description.innerHTML = this.description
    role.innerHTML = this.role
    roleIcon.src = `${this.roleIcon}`
    imgCharacter.src = `${this.fullPortrait}`
    qImg.src = `${this.qImg}`
    eImg.src = `${this.eImg}`
    cImg.src = `${this.cImg}`
    xImg.src = `${this.xImg}`
}
    
    
}