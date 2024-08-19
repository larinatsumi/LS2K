const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A principal fonte de energia da matriz elétrica no Brasil e a que mais gera energia elétrica no mundo é:",
        alternativas: [
            {
                texto: "Hidrelétrica.",
                afirmacao: "No caso do Brasil, a maior parte da energia elétrica é produzida nas hidrelétricas."
            },
            {
                texto: "Eólica.",
                afirmacao: "Esta fonte só pode ser aproveitada nos momentos em que há vento suficiente.Então por isso não é tão suficiente."
            }
        ]
    },
    {
        enunciado: "Qual das alternativas abaixo representa uma desvantagem da energia hidroelétrica?",
        alternativas: [
            {
                texto: "Produção de energia contínua.",
                afirmacao: "A energia hidroelétrica pode produzir energia contínua, desde que haja fluxo de água disponível."
            },
            {
                texto: "Impacto sobre ecossistemas aquáticos.",
                afirmacao: "A construção de represas pode alterar ecossistemas aquáticos, afetar a vida selvagem e causar deslocamento de comunidades.."
            }
        ]
    },
    {
        enunciado: "Qual das seguintes fontes de energia é considerada renovável?",
        alternativas: [
            {
                texto: "Energia solar.",
                afirmacao: "É renovável. Utiliza a luz do sol, que é uma fonte abundante e praticamente inesgotável a curto prazo, e não emite gases de efeito estufa durante a geração de energia."
            },
            {
                texto: "Petróleo.",
                afirmacao: "Não é renovável. Assim como o carvão e o gás natural, o petróleo é um combustível fóssil que leva milhões de anos para se formar e pode se esgotar."
            }
        ]
    },
    {
        enunciado: "Qual é um dos principais desafios associados à utilização de energia eólica?",
        alternativas: [
            {
                texto: "Ruído e impacto visual.",
                afirmacao: "O ruído gerado pelas turbinas eólicas e o impacto visual são desafios frequentemente mencionados, especialmente em áreas residenciais e paisagens naturais."
            },
            {
                texto: "Escassez de recursos naturais.",
                afirmacao: "A energia eólica não depende de recursos naturais finitos, ao contrário dos combustíveis fósseis."
            }
        ]
    },
    {
        enunciado: "Qual das alternativas abaixo é uma desvantagem significativa da energia nuclear?",
        alternativas: [
            {
                texto: "Resíduos radioativos.",
                afirmacao: "Esta é uma desvantagem significativa da energia nuclear. O gerenciamento de resíduos radioativos é um problema persistente e complexo, exigindo soluções de longo prazo para armazenamento seguro."
            },
            {
                texto: "Baixa densidade energética.",
                afirmacao: "A energia nuclear tem alta densidade energética, o que significa que uma pequena quantidade de combustível pode gerar uma grande quantidade de energia."
            }
        ]
    },
    {
        enunciado: "Qual das seguintes alternativas é uma vantagem significativa da energia solar?",
        alternativas: [
            {
                texto: "Baixo impacto ambiental.",
                afirmacao: "A energia solar tem um impacto ambiental baixo durante a operação, pois não emite poluentes e requer pouca água, diferentemente de muitas outras formas de geração de energia."
            },
            {
                texto: "Disponibilidade contínua",
                afirmacao: "A energia solar depende da luz solar, portanto, não está disponível à noite e pode ser afetada por condições climáticas. "
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
    caixaPerguntas.textContent = "Em 2057...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
