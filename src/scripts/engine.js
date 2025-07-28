const emojis = [
    "🐵","🐵","🐶","🐶","🐹","🐹","🐷","🐷","🐸","🐸","🐴","🐴","🐔","🐔","🦒","🦒" 
]
let openCards = []

// aqui utilizo para embaralhar os elementos
// o .sort permite criar uma ordenação de acordo com alguma regra de alguma função que eu passar dentro
//começo com uma função anonima com esses parenteses vazios ()
// depois vou com o "Math", essa biblioteca é para fazer calculos matematicos
// depois utiliso o random, e vamos falar pra ele que se esse numero alatorio
// for maior que 0.5 vou criar um if iternario com eesse interrogação vai ficar como 2
// caso não, vou colocar um numero negativo
// isso faz com que, para cada elemento desse ele vai colocar o peso de 2 ou -1
// ai ele vai colocar quem tive o peso de -1 vai pra tras e 2 vai pra frente
// como vai ter mais de um elemento com o peso de 2, ele vai fazer uma ordenação por ondem de chegada
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// o for aqui é para desenha o elemento na tela
// então dentro dele eu declaro uma variavel "i" e dou valor inicial de zero
// depois do ponto e virgula eu digo até a onde vai, ai ele vai até quando for menor que a quantidade de emojus
// depois vamos acrescentar de um em um
for (let i = 0; i < emojis.length; i++) {
    // dentro desse escopo do "i" eu vou criar dinamicamente uma "box"
    // para criar eu vou no "document" e dou um createElement
    // ai digo pra ele criar dinamicamente um elemento com uma tag div
    let box = document.createElement("div");
    // vou adicionar a classe "item" que vamos formatar no CSS com fundo brando
    box.className = "item";
    // o elemento que vai estar dentro do html desse cara vai ser posição "i"
    box.innerHTML = shuffleEmojis[i];
    // Toda vez que chamar o OnClick ele vai chamar uma função chamada "handleClick"
    box.onclick = handleClick;
    // ao final vou pindurar isso na div principal que é a game
    //ai que estiver com a tag game vou colocar esse appendChild que seria pendurar filho
    // ai coloco dentro dos parenteses a variavel box
    document.querySelector(".game").appendChild(box);
}

// Criar a função "handleClick"
// Ela serve para, se eu clicar em alguma carta eu quero guardar as 2 cartas que eu clicar vou guardar na "OpenCards"
// Essas 2 cartas que eu clicar eu preciso comparar se são iguais
function handleClick(){
    // Primeiro tenho que compara se tem menos de 2 cartas pois se tiver terceira carta está errado
    // Aqui eu vejo se o tamanho do "OpenCards" é menor que 2...
    if (openCards.length < 2) {
        // no momento que eu clicar vou adicionar nele com o "this.classList" vou add a classe chamada "boxOpen"
        // assim toda vez que uma carta for aberta ele vai criar essa classe chamada "boxOpen"
        this.classList.add("boxOpen");
        // alem disso eu vou pendurar esse "openCards", no casso carta que cliquei, vou dar um push para guardar no vertor "this"
        openCards.push(this);
    }
    // vou ter aqui outro IF para comparar se deu MATCH, se forem iguais
    // Então vou chamar o meu vetor "openCards" e vou fazer isso só quando o tamanho dele for == 2
    if (openCards.length == 2) {
        //
        setTimeout(checkMatch, 500)
    }

}

function checkMatch(){
    // Como ele sempre salva 2 posições (0 e 1), vou comparar uma com a outra
    // dentro do "openCards" vou comparar o inner HTML do primeiro elemento com o segundo
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        // entao se os 2 forem iguais vou adicionar uma classe nele (no ,classList) de add "boxMatch"
        // vou adcionar tanto na posicao zero quanto na posição 1
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        // se não for iguais, tenho que ir no else e remover o "classList" boxOpen
    } else {
        openCards[0].classList.remove("boxOpen")
        openCards[1].classList.remove("boxOpen")
    }

    // depois da minha verificaçao de IF e ELSE eu tenho que zerar o vetor "openCards"
    // se não fizer isso eu não vou conseuir trabalhar com ele depois
    openCards = [];

    // vamos adicionar outro IF para que ele pegue com o "document.querySelectorAll"
    // para pegar todo mundo que tenha a classe "boxMatch" e se 
    // o tamnanho do elementos forem iguais ao tamnnho da variável "emojs" significa que tem o mesmo tambh 
    // Assim diz que virou todas as cartas e terminou o jogo colocando um "alert"
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você venceu !");
    } 
}