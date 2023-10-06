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
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.`
        res.innerHTML += `<p>A mádia dos valores digitados é igual a ${media}.</p>`
    }
}