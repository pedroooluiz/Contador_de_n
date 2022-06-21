var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var pula = document.getElementById('pula')
var contar = document.getElementById('contando')

function verificar(){
    if(pula.value == 0 && Number(pula.value == 0)){
        alert('Pulando no mínimo de 1 em 1')
        pula.value++
    }
    var n1 = Number(inicio.value)
    var n2 = Number(fim.value)
    var n3 = Number(pula.value)
    if(n1>n2){
        while(n1 >= n2){
            contar.innerHTML += `${n1} &#128073`
            n1 -= n3
        }
        contar.innerHTML += ` Fim`
    }else{
        while(n1 <= n2){
            contar.innerHTML += `${n1} &#128073`
            n1 += n3
        }
        contar.innerHTML += ` Fim`
    }
}
contar.innerHTML += ` Fim`
