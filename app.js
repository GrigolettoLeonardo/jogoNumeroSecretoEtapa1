alert("Seja bem vindo(a) ao jogo do número secreto!!");
//Gerando número aleatório com o random
let limiteNumeroSecreto = 10;
let numeroSecreto = Math.round(Math.random() * limiteNumeroSecreto+1);
console.log(numeroSecreto);
// Mostra uma mensagem no console   
let chute;
let pontuacao = 1000;
let tentativas = 1;
let jogadas;

//Determinando nível do jogo
while(true){

    alert("Nível Easy {1}, Nível Middle {2}, Nível Hard {3}");
    let nivel = prompt("Escolha o nível do jogo:");
    //Verificação de valor válido
    if (nivel >=1 && nivel<=3){

        //Atribuido qtd de jogadas
        if (nivel == 1){
            jogadas = 20;
        } else if(nivel == 2){
            jogadas = 10;
        } else{
            jogadas = 5;
        }
        break;
    } else{
        alert("Escolha um valor válido!!");
        continue;
    }
}

console.log(jogadas);

//Loop para verificação de acerto do número secreto
while (chute != numeroSecreto && tentativas<=jogadas){

    //Verificação de valor válido
    while(true){
        //Informa a tentativa do usuário
        alert(`Tentativa: ${tentativas}`);
        //Pega o chute do usuário
        chute = prompt(`Escolha um número entre 1 e ${limiteNumeroSecreto}:`);

        //Verificação do valor do chute
        if (chute > 0 && chute <= limiteNumeroSecreto){
            break;
        } else{
            alert(`Coloque um valor válido entre 0 e ${limiteNumeroSecreto}`);
            continue;
        }
    }   
    //Início da verificação do chute
    if (chute == numeroSecreto) {
        //A forma abaixo é de concatenar textos com variáveis!
        //alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);  

        //Outra forma de concatenar valores
        alert("Isso aí! você descobriu o número secreto: "+ numeroSecreto+" e sua pontuação foi de: "+pontuacao);

    } else{        
        if (chute > numeroSecreto){

            alert(`Você errou! o número secreto é menor que o ${chute}`);
            
        } else{

            alert(`Você errou! o número secreto é maior que o ${chute}`);
        }
        
        pontuacao = pontuacao-Math.abs(chute-numeroSecreto);
        tentativas++;
    }


}

let fimDeJogo = tentativas > jogadas ? "Fim de jogo pois excedeu tentativas": "Fim de jogo";
alert(fimDeJogo);

// let palavraTentativa = tentativa > 1 ? "Tentativas" : "Tentativa";
// Forma de fazer o if e o else no próprio valor que a variável está recebendo;
