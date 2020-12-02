var num = document.querySelector('#fnum')
var list = document.querySelector('#lista')
var res = document.querySelector('#result')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
var l = 1                
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.innerHTML = `valor ${num.value} foi adicionado`
        lista.appendChild(item);
    } else {
        alert('valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {

        res.innerHTML = '<p>adicione valores antes de finalizar</p>'
    } else {
        let tot = valores.length

        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ``
        res.innerHTML += `<p>ao todo temos ${tot} cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>a media dos valores digitadoe é ${media}.</p>`
    }
}

