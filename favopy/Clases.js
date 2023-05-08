class agents{
    constructor(name,imagen,desc,rol,iconrol,imagenpj,qimg,eimg,cimg,ximg){
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
    return`<a href="../../Info/index.html" >
    <div class="tarjeta" id="tarjeta" onclick="selected()">
    <div class="estrella"><img src="../../Agentes/Imagenes/imagen6.png" alt=""></div>
    <div class="imagen2"><img src="${this.imagen}" alt="" height="331px"></div>
    
</div><p class="textoo">${this.name}</p></a>`
    
    
}
}