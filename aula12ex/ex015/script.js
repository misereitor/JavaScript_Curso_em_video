const selId = window.document.querySelector.bind(document)
const ano = new Date().getFullYear()
function verificar() {
    const fano = selId('input#txtano')
    const res = selId('div#res')
    if (fano.value.length == 0 || fano.value > ano || fano.value < 1900) {
        window.alert('[ERRO] Verifiquei os dados e tente novamente!')
    } else {
        const fsex = window.document.getElementsByName('radsex')
        const idade = ano - Number(fano.value)
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')
        let genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 60){
                // Idoso
                img.setAttribute('src', 'img/foto-idoso-m.png')
            } else if(idade <= 10) {
                // criança
                img.setAttribute('src', 'img/foto-bebe-m.png')
            } else if (idade <= 18)  {
                //Jovem
                img.setAttribute('src', 'img/foto-jovem-m.png')
            } else {
                // Adulto
                img.setAttribute('src', 'img/foto-adulto-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade > 60){
                // Idoso
                img.setAttribute('src', 'img/foto-idoso-m.png')
            } else if(idade <= 10) {
                // criança
                img.setAttribute('src', 'img/foto-bebe-m.png')
            } else if (idade <= 18)  {
                //Jovem
                img.setAttribute('src', 'img/foto-jovem-m.png')
            } else {
                // Adulto
                img.setAttribute('src', 'img/foto-adulto-m.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}