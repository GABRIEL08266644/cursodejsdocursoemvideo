function contar() {
    var ini = document.querySelector('#txti');
    var fim = document.querySelector('#txtf');
    var pas = document.querySelector('#txtp');
    var res = document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = ''
        alert('[ERRO] falta dados')
    } else {
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p =  Number(pas.value)
        if (p <= 0) {
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p ) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }else {
            for(let c = i; c >=f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }

    }
}