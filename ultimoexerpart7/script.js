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
        window.alert('tudo ok chefia!')
    } else {
        window.alert('O valor digitado é inválido ou já foi inserido na lista!')
    }
}