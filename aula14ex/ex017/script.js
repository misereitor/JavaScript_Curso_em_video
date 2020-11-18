const selId = window.document.querySelector.bind(document)
const selEle = window.document.createElement.bind(document)
function calcular() {
    const txtnum = selId('input#txtnum')
    const res = selId('select#seltab')
    if(txtnum.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        res.innerHTML = ''
        for(let c=1; c <= 10; c++){
            let item = selEle('option')
            item.text = `${txtnum.value} x ${c} = ${Number(txtnum.value) * c}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }

    
}