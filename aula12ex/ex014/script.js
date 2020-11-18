const selId = window.document.querySelector.bind(document)
const hora = new Date().getHours()
function carregar() {
    const msg = selId("div#msg")
    const img = selId('img#imagem')
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'img/manha.png'
        document.body.style.background = " rgb(234, 243, 105)"
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = "rgb(250, 188, 16)"
    } else {
        //Boa noite
        img.src = 'img/noite.png'
        document.body.style.background = "rgb(116, 117, 101)"
    }
}
