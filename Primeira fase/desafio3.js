// 1* Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;
while(contador < 10) {
    console.log('Contando...' + contador); 
    contador = contador + 1;
}
console.log(contador); 

//2* Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
 let contadorReverso = 10; 
 while(contadorReverso >= 1){
    console.log('Contagem Regressiva...'  + contadorReverso)
    contadorReverso--; 
 }
 console.log(contadorReverso); 

 // 3* Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
 let contagem = prompt('Digite um número');
 while(contagem >=1){
    console.log('Contagem Regressiva...'  + contagem);
    contagem--; 
 }
 console.log(contagem); 

 // 4* Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
 let numeroMaximo = prompt('Digite um número de 0 a 10 ');
 let contadorS = 0; 
 while(contadorS <= numeroMaximo){
    console.log(contadorS);
    contadorS++ 
 }
 console.log(contadorS); 