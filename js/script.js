function formatNumber(number){
    return new Intl.NumberFormat('pt-br').format(number);
}

function soma(a, b){

    return a + b;
}

function subtracao(a, b){

    return a - b;
}

function multiplicacao(a, b){

    return a * b;
}

function divisao(a, b){

    return formatNumber(a / b);
}

function exponenciacao(a, b){

    return a ** b;
}

function fatorial(n){

    var r = 1;

    for(var i = n; i > 1; i--){
        r *= i;
    }

    return r;
}

function divisor(n){

    var r = [];

    for(var i = 1; i <= n; i++){

        if(n % i === 0){
            r.push(i);
        }
    }

    return r;
}

function calcular(){

    let valorA = Number(document.querySelector('#primeiroNumero').value);
    let valorB = Number(document.querySelector('#segundoNumero').value);

    let somaAB = soma(valorA, valorB);
    document.querySelector('#mostraSomaAB').value = somaAB;

    let subtracaoAB = subtracao(valorA, valorB);
    document.querySelector('#mostraSubtracaoAB').value = subtracaoAB;

    let subtracaoBA = subtracao(valorB, valorA);
    document.querySelector('#mostraSubtracaoBA').value = subtracaoBA;

    let multiplicacaoAB = multiplicacao(valorA, valorB);
    document.querySelector('#mostraMultiplicacaoAB').value = multiplicacaoAB;

    let divisaoAB = divisao(valorA, valorB);
    document.querySelector('#mostraDivisaoAB').value = divisaoAB;

    let divisaoBA = divisao(valorB, valorA);
    document.querySelector('#mostraDivisaoBA').value = divisaoBA;

    let quadradoA = exponenciacao(valorA, 2);
    document.querySelector('#mostraQuadradoA').value = quadradoA;

    let quadradoB = exponenciacao(valorB, 2);
    document.querySelector('#mostraQuadradoB').value = quadradoB;

    let fatorialA = fatorial(valorA);
    document.querySelector('#mostraFatorialA').value = fatorialA;

    let fatorialB = fatorial(valorB);
    document.querySelector('#mostraFatorialB').value = fatorialB;

    let divisorA = divisor(valorA);
    document.querySelector('#mostraDivisoresInteirosA').value = divisorA + ' (' + divisorA.length + ')';

    let divisorB = divisor(valorB);
    document.querySelector('#mostraDivisoresInteirosB').value = divisorB + ' (' + divisorB.length + ')';
}