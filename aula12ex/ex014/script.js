function carregar() {
var msg = window.document.getElementById('msg')
var imagem = window.document.getElementById('imagem')
var data = new Date ()
var hora = data.getHours ()

msg.innerHTML = `Agora são ${hora}`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        imagem.src = "fotomanha.jpg"
        document.body.style.background = "#f0e68c" // cor suave de manhã
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        imagem.src = "fototarde.jpg"
        document.body.style.background = "#f4a460" // cor quente de tarde
    } else {
        // BOA NOITE
        imagem.src = "fotonoite.jpg"
        document.body.style.background = "#2f4f4f" // cor escura de noite
    }
}