const selId = window.document.querySelector.bind(document)

function contar(){
    const ini = selId("input#txti")
    const fim = selId("input#txtf")
    const passo = selId("input#txtp")
    const res = selId('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] Falta dados!")
    } else {
        res.innerHTML = "Contando: "
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        //contagem crescente
        if(i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //contagem decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        }
        res.innerHTML += '\u{1F3C1}'
    }
}