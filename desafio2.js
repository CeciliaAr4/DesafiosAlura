// 1* Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
diaDaSemana = prompt("segunda-feira"); 

if(diaDaSemana === 'Domingo'){
    console.log('Bom fim de semana');
}else if(diaDaSemana === 'Sábado'){
    console.log('Bom fim de semana');
}else {
    console.log('Boa semana!')
}

// 2* Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
//userNumber = prompt("Digite um número para verificar se é positivo ou negativo: ");
let numero = 10;
if(numero > 0){
    console.log(`Seu número ${numero} é um número positivo!`);
}
if(numero < 0){
    console.log(`Seu número ${numero} é um número negativo!`);
} 

// 3* Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let seusPontos = 90; 

if (seusPontos >= 100){
    console.log("Parabéns, você venceu!");
}else {
    console.log("Tente novamente para ganhar.");
}

// 4* Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoConta = 1000; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);

// 5* Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeUser = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`);