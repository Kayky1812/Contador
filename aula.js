function contar(){
    let inicio = document.getElementById('txti') 
    let fim  = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length ==0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert ('ERRO!! faltam dados')
        res.innerHTML = 'Impossivel contar'
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            window.alert('Passo inválido')
            p = 1
        }
        if (i < f){
            //Contagem crescente 
            for(let c = i; c<=f ;c += p ){
                res.innerHTML += `${c} \u{1F449}`
            }
                
          //Contagem regressiva
        }else{
            for(let c = i; c >=f; c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }
        res.innerHTML +=  `\u{1F3C1}`
       
    }
}