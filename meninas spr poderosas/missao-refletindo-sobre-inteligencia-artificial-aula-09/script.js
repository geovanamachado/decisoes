const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que você sair para fora de casa existirá dois caminhos, o da salvação e o do pecado! Qual você irá escolher?",
        alternativas: [
            {
                texto: "Pecado!",
                afirmacao: "lago de fogo,"
            },
            {
                texto: "Salvação!",
                afirmacao: "vida eterna com Jesus,"
            }
        ]
    },
    {
        enunciado: "Com a descoberta desses caminhos o inimigo sempre estará em sua volta, você tem que tomar cuidado com brechas!  Qual atitude você toma?",
        alternativas: [
            {
                texto: "Dou brecha pois quero viver o mundo da forma que eu quiser.",
                afirmacao: "perdeu a salvação,"
            },
            {
                texto: "Viver em cristo para que eu possa ser salvo .",
                afirmacao: "Não sofrer mais,"
            }
        ]
    },
    {
        enunciado: "Após a sua decisão Deus está te chamando para o seu CHAMADO, você quer fazer as obras do Senhor ou viver em desobediência?",
        alternativas: [
            {
                texto: "Continuar na rebeldia vivendo para o mundo.",
                afirmacao: "queimar a vida eterna,"
            },
            {
                texto: "Eu prefiro viver meu chamado com Cristo e viver em paz.",
                afirmacao: "Sentirá a presença do Senhor,"
            }
        ]
    },
    {
        enunciado: "Se alguém que você não gosta te pedir ajuda, o que você faria?",
        alternativas: [
            {
                texto: "Dizer não e viver em armagura.",
                afirmacao: "Sofrimento,"
            },
            {
                texto: "Ajudar o próximo pois Deus nos ensinou a amar e perdoar.",
                afirmacao: "Se aproximar de Deus,"
            }
        ]
    },
    {
        enunciado: "O Senhor resolve te dar uma chance para se arrepender. O que você faz? ",
        alternativas: [
            {
                texto: "Me arrepender de alma e coração.",
                afirmacao: "-𝐂𝐨𝐧𝐜𝐥𝐮𝐬ã𝐨: 𝐒𝐞𝐫á 𝐩𝐞𝐫𝐝𝐨𝐚𝐝𝐨 𝐞 𝐩𝐨𝐝𝐞𝐫á 𝐯𝐢𝐯𝐞𝐫 𝐞𝐦 𝐩𝐚𝐳 𝐜𝐨𝐦 𝐉𝐞𝐬𝐮𝐬."
            },
            {
                texto: "Continuar sendo pecador e viver sem Cristo.",
                afirmacao: "-𝐂𝐨𝐧𝐜𝐥𝐮𝐬ã𝐨: 𝐕𝐨𝐜ê 𝐢𝐫á 𝐬𝐨𝐟𝐫𝐞𝐫 𝐩𝐚𝐫𝐚 𝐬𝐞𝐦𝐩𝐫𝐞! "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }         
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "𝘿𝙚𝙥𝙤𝙞𝙨 𝙙𝙚 𝙩𝙪𝙙𝙤 𝙞𝙨𝙨𝙤...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
