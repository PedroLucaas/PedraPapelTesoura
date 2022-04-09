var pedra = document.querySelector("#pedra");
var papel = document.querySelector("#papel");
var tesoura = document.querySelector("#tesoura");
var resultado = document.querySelector("#resultado");
var escolhaMaquina;
var escolhaJogador;


pedra.addEventListener("click", function() {
  pedra.style.boxShadow = "0px 0px 25px rgb(390, 0, 00)";
  papel.style.boxShadow = "";
  tesoura.style.boxShadow = "";
  escolhaJogador = 1;
});

papel.addEventListener("click", function() {
  papel.style.boxShadow = "0px 0px 25px rgb(390, 0, 00)";
  pedra.style.boxShadow = "";
  tesoura.style.boxShadow = "";
  escolhaJogador = 2;
});

tesoura.addEventListener("click", function() {
tesoura.style.boxShadow = "0px 0px 25px rgb(390, 0, 00)";
papel.style.boxShadow = "";  
pedra.style.boxShadow = "";
escolhaJogador = 3
});

function playGame() {

    Math.floor(Math.random() * 10 + 1); // escolha maquina numero aleatório 1-3
    max = 3;
    function getRandom(max) {
      return Math.floor(Math.random() * 3 + 1);
    }
     escolhaMaquina = getRandom(max);

    

    switch (escolhaJogador)
    {
    case 1:
        switch(escolhaMaquina)
        {
            case 1:
                resultado.innerHTML = "Empate!";
                break;
            case 2:
                resultado.innerHTML ="Voce Perdeu, eu escolhi Papel.";
                break;
            case 3: 
                resultado.innerHTML ="Voce Ganhou, eu escolhi Tesoura.";
                    break;
            default:
                resultado.innerHTML ="Erro.";
                break;
    
        }
        break;
    case 2:
        switch(escolhaMaquina)
        {
            case 1:
                resultado.innerHTML ="Voce Ganhou, eu escolhi Pedra.";
                break;
            case 2:
                resultado.innerHTML ="Empate!";
                break;
            case 3: 
                resultado.innerHTML ="Voce Perdeu, eu escolhi Tesoura.";
                break;
            default:
                resultado.innerHTML ="Erro!";    
                break;
        }
        break;    
    case 3:
        switch(escolhaMaquina)
        {
            case 1:
                resultado.innerHTML ="Voce Perdeu, eu escolhi Pedra.";
                break;
            case 2:
                resultado.innerHTML ="Voce Ganhou, eu escolhi Papel.";
                break;
            case 3: 
                resultado.innerHTML ="Empate!";
                break;
            default:
                resultado.innerHTML ="Erro!";
                break;
        }
        break;    

    }}