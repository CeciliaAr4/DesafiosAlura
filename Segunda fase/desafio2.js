// 1*Criar uma função que exibe "Olá, mundo!" no console.
function mensagem(){
    console.log("Olá mundo!"); 
}

mensagem(); 

 //2*Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
let nome = "Cecília";

function receberNome(nome){
    console.log(`Óla ${nome}!`)
}
receberNome(nome); 


//3* Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
let numero = 2; 

function dobro(numero){
     numero = numero *2;  
    console.log(`O dobro de é  ${numero}`);
}
dobro(numero);

//4* Criar uma função que recebe três números como parâmetros e retorna a média deles.
 
function calcularMedia(num1, num2, num3){
   const media = (num1 + num2 + num3) / 3 
   return media
}
let resultado = calcularMedia(10, 20, 30);
console.log(`A média dos valores é  ${resultado}.`)

//5* Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function compararMaior(numero1, numero2){
    if (numero1 > numero2){
        return numero1
    }else {
        return numero2
    }
}

let resultado1 = compararMaior(5, 10);
console.log(`O maior numero é ${resultado1}`)


//6* Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

function multiplicação (valor1){
    const valorMulti = valor1 *valor1  
    return valorMulti
 }
 let resultado2 = multiplicação(10);
 console.log(`O valor da multiplicação do valor por ele mesmo é   ${resultado2}.`)