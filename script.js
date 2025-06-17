const perguntas = [
  {
    pergunta: "Qual destes alimentos é mais comum ser produzido no campo?",
    opcoes: ["Cenoura", "Refrigerante", "Pizza", "Chocolate"],
    correta: 0
  },
  {
    pergunta: "Qual equipamento é mais comum nas grandes cidades?",
    opcoes: ["Trator", "Semáforo", "Plantadeira", "Arado"],
    correta: 1
  },
  {
    pergunta: "O que é uma feira agroecológica?",
    opcoes: [
      "Um local de venda de celulares",
      "Uma feira de produtos agrícolas com práticas sustentáveis",
      "Uma exposição de tratores antigos",
      "Um mercado apenas de produtos industrializados"
    ],
    correta: 1
  },
  {
    pergunta: "Qual atitude fortalece a conexão entre campo e cidade?",
    opcoes: [
      "Troca de produtos regionais",
      "Conflitos por território",
      "Isolamento das áreas rurais",
      "Falta de transporte"
    ],
    correta: 0
  },
  {
    pergunta: "Qual desses profissionais atua mais no campo?",
    opcoes: ["Agricultor", "Piloto de avião", "Bombeiro urbano", "Porteiro de prédio"],
    correta: 0
  },
  {
    pergunta: "Como o pensamento computacional pode ajudar na agricultura?",
    opcoes: [
      "Apenas com jogos",
      "Controlando pragas com mágica",
      "Usando dados para melhorar a produção",
      "Não pode ajudar em nada"
    ],
    correta: 2
  }
];

let indiceAtual = 0;
let pontuacao = 0;

function mostrarPergunta() {
  const q = perguntas[indiceAtual];
  document.getElementById("pergunta").textContent = q.pergunta;

  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";

  q.opcoes.forEach((opcao, i) => {
    const botao = document.createElement("button");
    botao.textContent = opcao;
    botao.onclick = () => verificarResposta(i);
    opcoesDiv.appendChild(botao);
  });
}

function verificarResposta(i) {
  if (i === perguntas[indiceAtual].correta) {
    pontuacao++;
  }
  document.querySelectorAll("#opcoes button").forEach(btn => btn.disabled = true);
}

function proximaPergunta() {
  indiceAtual++;
  if (indiceAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("resultado").classList.remove("hidden");
  document.getElementById("resultado").innerHTML = `<h2>Você acertou ${pontuacao} de ${perguntas.length} perguntas!</h2>`;
}

mostrarPergunta();
