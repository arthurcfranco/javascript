function carregar() {
var msg = window.document.getElementById('msg')
var imagem = window.document.getElementById('imagem')
var data = new Date ()
var hora = data.getHours ()

msg.innerHTML = `Agora são ${hora}`

if (hora >= 0 && hora < 12) {
    //BOM DIA!
    Image.src="fotomanha.jpg"
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    Image.src="fototarde.jpg"
} else {
    //BOA NOITE
    Image.src="fotonoite.jpg"
}
}