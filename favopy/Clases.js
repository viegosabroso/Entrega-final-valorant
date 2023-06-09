class agents{
    constructor(id,name,imagen,desc,rol,iconrol,imagenpj,qimg,eimg,cimg,ximg){
    this.id = id
    this.name = name 
    this.imagen = imagen
    this.desc =desc 
    this.rol = rol
    this.iconrol = iconrol
    this.imagenpj = imagenpj
    this.qimg =qimg 
    this.eimg =eimg 
    this.cimg =cimg 
    this.ximg =ximg 


    }
tohtml(pos){
    return`<div class="tarjeta" id="tarjeta" onclick="selected(${pos})">
    <i class="fa-regular fa-bookmark estrella"  style="color: #ffffff;" onclick="event.stopPropagation(); addFavorite('${this.id}')" ></i>
    <p class="textoo">${this.name}</p>
    <div class="imagen2"><img src="${this.imagen}" alt="" height="331px"></div>`
    
    
}
}