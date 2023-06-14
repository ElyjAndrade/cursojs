var num = document.getElementById('fnum')
var list = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
} 

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNum(num.value) && !inList(num.value, valores)) {
       valores.push(Number(num.value))  
       var item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado.`
       list.appendChild(item)
       res.innerHTML = ''
       
    } else {
        window.alert('O valor digitado é inválido ou já foi inserido na lista!')
    }
    num.value = ''
    num.focus()
    
}

function finalizar() {
    if(valores.length == 0) {
        window.alert(`Adicione valores antes de finalizar!`)
    } else {
        var tot = valores.length 

        res.innerHTML = ''
        res.innerHTML += `<p>Temos ${tot} números cadastrados.</p>`
    }
}