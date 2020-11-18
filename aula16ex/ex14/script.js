const selId = document.querySelector.bind(document)
let valores = []
function analisar() {
    const res2 = document.querySelector("div#res")
    const txtnum = selId('input#txtnum')
    let res = selId('select#seltab')
    let selValores = window.document.createElement('option')
    if (Number(txtnum.value) < 1 || Number(txtnum.value) > 100 || txtnum.value.length == 0 || valores.indexOf(Number(txtnum.value)) != -1 ){
        window.alert('[ERRO] Verifique o número digitado')
    } else {
        valores.push(Number(txtnum.value))
        selValores.text = `Valor ${txtnum.value} adicionado`
        res.appendChild(selValores)
    }
    res2.innerHTML = ''
    txtnum.value = ''
    txtnum.focus()
}

function finalizar() {
    const res2 = document.querySelector("div#res")
    valores.sort()
    const total = valores.length
    let soma = 0
    if(total != 0) {
        for (let c=0;c < total; c++ ){
            soma += valores[c]
        }
    } else {
        window.alert('[Erro] Digite um número para ver o resultado')
    } 
    res2.innerHTML = `Ao total, temos ${total} número(s) cadastrados <br><br>`
    res2.innerHTML += `O maior valor informado foi ${Math.max.apply(null, valores)}<br><br>`
    res2.innerHTML += `O menor valor informado foi ${Math.min.apply(null, valores)}<br><br>`
    res2.innerHTML += `A soma de todos os valores é ${soma}<br><br>`
    res2.innerHTML += `A média dos valores digitados é ${soma / total}`
}
