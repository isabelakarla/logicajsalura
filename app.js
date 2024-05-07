    //projeto de javaScript da ALURA
    alert('Olá! Boas vindas ao jogo do número secreto :)');
    //exibir na tela uma mensagem para o usuário
    let numeroMaximo = 50;
    let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1);
    console.log(numeroSecreto);
    // o Math.random é um recurso do js para o computador gerar um número aleatório em cima desse código, já o parseInt é uma função para fazer com q o número inteiro fique sem quebradinhos


    //sempre colocar o let antes das variáveis que precisam ter uma informação guardada (como o número secreto e o chute, que precisam ser comparados)

    console.log (numeroSecreto);
    //console.log = este método de console vai enviar os dados diretamente para o console do navegador,  o que permite testar informações relevantes durante a execução de um programa, não sendo exibido para o usuário

    let chute;
    let tentativas= 1;
    // começou com 1 porque sempre começaremos com uma tentativa (para o nosso loop)

    // enquanto o chute não for igual ao número secreto
    while (chute != numeroSecreto){
    chute = prompt(`Informe um número entre 1 e ${numeroMaximo}`);
    if (numeroSecreto == chute){
        break;
        // o break é usado para dar uma pausa no programa
    } else{
        // dá para colocar um if dentro de um else e depois finalizar código
    if (numeroSecreto > chute) {
        alert(`Eita, você errou :/ O Número Secreto é maior que ${chute}`);
    } else{
        alert(`Eita, você errou :/ O Número Secreto é menor que ${chute}`);
    }
    // contador
    // tentativas = tentativas + 1 (nosso loop)
    tentativas++;
}
 }
// operador ternário (para simplificar os if/else)
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
 alert(`Isso aí, parabéns! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`);
  
//  if (tentativas > 1) {
//     alert(`Isso aí, parabéns! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativas`);
//     //para fazer uma calcatenação, é necessário colocar a variável que você quer dentro de chaves com um cifrão antes, tudo entre crase. alert(`sjqj ${variavel}`);
// } else {
//     alert (`Isso aí, parabéns! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativa`);
//   }