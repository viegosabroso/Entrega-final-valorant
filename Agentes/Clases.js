class agents{
    constructor(id,name,imagen,description,role,roleIcon,fullPortrait,qImg,eImg,cImg,xImg){
        this.id = id
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
tohtml(){
    return`
    <div class="tarjeta" id="tarjeta" onclick="prueba('${this.id}')">
    <i class="fa-regular fa-bookmark estrella"  style="color: #ffffff;" onclick="event.stopPropagation(); addFavorite('${this.id}')" ></i>
    <p class="textoo">${this.name}</p>
    <div class="imagen2"><img src="${this.imagen}" alt="" height="331px"></div>
    
`
}
tohtmlFav(){
    return`
    <div class="tarjeta" id="tarjeta" onclick="prueba('${this.id}')">
    <i class="fa-solid fa-bookmark estrella"  style="color: #ffffff;" onclick="event.stopPropagation(); deleteFavorite('${this.id}')"></i>
    <p class="textoo">${this.name}</p>s
    <div class="imagen2"><img src="${this.imagen}" alt="" height="331px"></div>
    
`
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