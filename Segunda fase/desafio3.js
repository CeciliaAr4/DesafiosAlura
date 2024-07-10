//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.//
function IMC(peso,altura){
    let resultadoIMC = peso / (altura * altura);
}

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.//

function calcularFatorial(numero){
    if (numero === 0 || numero === 1 ){
        return 1;
    }
    
    let nfatorial = 1;
    for (let i = 2; i <= numero ; i++) {
        nfatorial *= i;
    }
    
    return nfatorial;
}


let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.//

function convertendoDolar(dolar){
    let valorAtualDolar = 4.80;
    let valorReais = valorAtualDolar * dolar; 
    return valorReais.toFixed(2);    
}

let valorDolar = 80;
let valorReais = convertendoDolar(valorDolar);
console.log(`${valorDolar} dólares equivalem a R$ ${valorReais}`);

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.//

function calcularAreaPerimetro(altura, largura){
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}

let altura = 6; 
let largura = 9; 
calcularAreaPerimetro(altura, largura);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.//

function calcularAreaPerimetroCircular(){
    
}