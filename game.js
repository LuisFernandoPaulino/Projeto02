// Bancos: Fase 1 (fase01exercicios.pdf), Fase 2 e Fase 3 (arquivos Texto colado.txt).
const QUESTIONS = {
  1: [
    { prompt: "Em um restaurante, o cardápio do dia oferece 3 opções de entrada, 4 opções de prato principal e 2 opções de sobremesa. De quantas maneiras diferentes um cliente pode montar uma refeição completa escolhendo uma opção de cada etapa?\nA) 9\nB) 12\nC) 18\nD) 24\nE) 48", answer: "D" },
    { prompt: "A senha de acesso a um jogo consiste em quatro caracteres alfabéticos (26 letras) ou numéricos (10 algarismos). O primeiro caractere deve ser uma letra; nos outros pode haver repetição. Quantas senhas são possíveis?\nA) 364\nB) 10 × 36³\nC) 26 × 36³\nD) 26⁴\nE) 10 × 26⁴", answer: "C" },
    { prompt: "Uma estante tem espaço para exatamente 6 livros diferentes, dispostos lado a lado. De quantas formas distintas esses livros podem ser organizados?\nA) 36\nB) 120\nC) 240\nD) 720\nE) 1.440", answer: "D" },
    { prompt: "Quantos anagramas distintos podem ser formados com as letras da palavra BANANA?\nA) 12\nB) 60\nC) 120\nD) 360\nE) 720", answer: "B" },
    { prompt: "Em uma competição de natação, 12 atletas disputam três medalhas distintas: ouro, prata e bronze. Nenhum atleta pode receber mais de uma medalha. Quantos resultados são possíveis?\nA) 36\nB) 220\nC) 990\nD) 1.320\nE) 1.728", answer: "D" },
    { prompt: "Com os algarismos de 1 a 9, quantos números naturais de 4 algarismos distintos podemos formar?\nA) 1.024\nB) 2.160\nC) 3.024\nD) 4.536\nE) 6.561", answer: "C" },
    { prompt: "Entre as variedades amor-perfeito, cravina, petúnia, margarida e lírio, serão escolhidas 3 para um canteiro. A ordem não importa. Qual expressão representa a quantidade de trios possíveis?\nA) 5\nB) 5 × 3\nC) 5! ÷ (5 − 3)!\nD) 5! ÷ ((5 − 3)! × 2!)\nE) 5! ÷ ((5 − 3)! × 3!)", answer: "E" },
    { prompt: "Uma escola possui 12 professores. Para uma gincana, serão escolhidos 3 para compor uma comissão sem cargos distintos. De quantas maneiras a comissão pode ser formada?\nA) 36\nB) 66\nC) 120\nD) 220\nE) 1.320", answer: "D" },
    { prompt: "Um entregador fará 5 entregas em pontos diferentes. Uma encomenda urgente deve ser entregue primeiro. De quantas maneiras distintas ele pode ordenar as 5 entregas?\nA) 16\nB) 24\nC) 25\nD) 120\nE) 720", answer: "B" },
    { prompt: "Um grupo de teatro tem 6 atores e 8 atrizes. Serão escolhidos 5 atores e 5 atrizes e, depois, os 10 selecionados formarão uma fila. Qual expressão dá o total de maneiras?\nA) C(6, 5) + C(8, 5) + 10!\nB) C(6, 5) × C(8, 5) × 10!\nC) A(6, 5) × A(8, 5)\nD) 10! × 2\nE) C(14, 10)", answer: "B" }
  ],
  2: [
    { prompt: "(ENEM — adaptada) Uma equipe precisa adivinhar qual entre 5 objetos foi escondido por qual entre 6 personagens em qual entre 9 cômodos de uma casa fictícia. Quantas combinações diferentes existem?\nA) 20\nB) 39\nC) 180\nD) 270\nE) 540", answer: "D" },
    { prompt: "Para cadastrar o código de acesso a um prédio, escolhem-se 2 letras (entre 26) seguidas de 3 algarismos (de 0 a 9). Letras e algarismos podem se repetir. Quantos códigos distintos podem ser criados?\nA) 6.760\nB) 67.600\nC) 468.000\nD) 650.000\nE) 676.000", answer: "E" },
    { prompt: "Cinco amigos vão ao cinema e reservam 5 poltronas consecutivas em uma mesma fileira. De quantas maneiras diferentes podem se sentar?\nA) 20\nB) 25\nC) 60\nD) 120\nE) 625", answer: "D" },
    { prompt: "Quantos anagramas distintos podem ser formados utilizando todas as letras da palavra ARARA?\nA) 10\nB) 12\nC) 20\nD) 60\nE) 120", answer: "A" },
    { prompt: "O grêmio estudantil conta com 8 candidatos para os cargos de presidente, vice-presidente e tesoureiro. Ninguém pode acumular cargos. De quantas maneiras distintas a diretoria pode ser formada?\nA) 24\nB) 56\nC) 168\nD) 336\nE) 512", answer: "D" },
    { prompt: "Em um campeonato de futebol com 10 times, serão premiados o campeão e o vice-campeão. De quantas formas diferentes pode ocorrer o resultado dessas duas colocações?\nA) 20\nB) 45\nC) 81\nD) 90\nE) 100", answer: "D" },
    { prompt: "Uma sorveteria oferece 10 sabores. Um cliente deseja pedir um pote com 3 bolas de sabores distintos, sem importar a ordem. Quantas escolhas diferentes pode fazer?\nA) 30\nB) 120\nC) 240\nD) 720\nE) 1.000", answer: "B" },
    { prompt: "Para realizar um trabalho em dupla, uma professora sorteará 2 alunos de um grupo de 6 voluntários. Quantas duplas distintas podem ser formadas?\nA) 12\nB) 15\nC) 30\nD) 36\nE) 64", answer: "B" },
    { prompt: "Uma senha tem 4 algarismos distintos escolhidos entre 0 e 9. O primeiro dígito não pode ser zero. Quantas senhas diferentes atendem a essas condições?\nA) 3.024\nB) 4.536\nC) 5.040\nD) 6.561\nE) 9.000", answer: "B" },
    { prompt: "Uma delegação do país A tem 10 atletas e a do país B tem 6. Um alojamento para 4 pessoas será ocupado por 2 atletas do país A e 2 do país B. Quantos grupos distintos podem ser formados?\nA) 60\nB) 180\nC) 450\nD) 675\nE) 1.350", answer: "D" }
  ],
  3: [
    { prompt: "Uma lanchonete oferece um combo com 1 lanche, 1 acompanhamento, 1 bebida e 1 molho. Há 5 tipos de lanche, 3 acompanhamentos, 4 bebidas e 6 molhos. Se o cliente não pode consumir 1 bebida e não gosta de 1 molho, de quantas maneiras pode montar o combo?\nA) 180\nB) 210\nC) 225\nD) 240\nE) 300", answer: "C" },
    { prompt: "Uma etiqueta de contêiner tem 4 caracteres. Cada posição aceita uma das 5 vogais ou um dos 4 algarismos pares positivos, com repetição. O primeiro caractere deve ser vogal e o último deve ser algarismo. Quantas etiquetas podem ser criadas?\nA) 180\nB) 400\nC) 1.296\nD) 1.620\nE) 6.561", answer: "D" },
    { prompt: "Uma estante possui 8 livros distintos: 3 de Matemática, 3 de Física e 2 de Química. De quantas maneiras podem ser organizados lado a lado, mantendo juntos os livros da mesma disciplina?\nA) 216\nB) 432\nC) 720\nD) 1.296\nE) 40.320", answer: "B" },
    { prompt: "Um entregador vai do ponto A ao ponto B em uma malha de ruas, andando apenas para Leste (L) ou Norte (N). O trajeto deve ter exatamente 5 quadras para Leste e 4 para Norte. Quantos caminhos distintos existem?\nA) 20\nB) 63\nC) 126\nD) 252\nE) 504", answer: "C" },
    { prompt: "Em uma corrida automobilística com 9 pilotos, os 4 primeiros colocados recebem pontuação decrescente. De quantas maneiras diferentes pode ser definida a ordem dos quatro primeiros?\nA) 126\nB) 504\nC) 1.512\nD) 3.024\nE) 6.561", answer: "D" },
    { prompt: "Usando os algarismos ímpares 1, 3, 5, 7 e 9, quantos números de 3 algarismos distintos podem ser formados se o algarismo das centenas deve ser menor que 7?\nA) 24\nB) 36\nC) 48\nD) 60\nE) 75", answer: "B" },
    { prompt: "Sobre uma circunferência são marcados 10 pontos distintos. Ligando-os dois a dois por segmentos, quantos triângulos distintos podem ser construídos com esses pontos como vértices?\nA) 30\nB) 45\nC) 120\nD) 240\nE) 720", answer: "C" },
    { prompt: "Uma clínica tem 6 cardiologistas e 5 neurologistas. Para um mutirão, será formada uma junta médica de 5 especialistas com pelo menos 4 cardiologistas. De quantas formas a junta pode ser formada?\nA) 45\nB) 75\nC) 81\nD) 90\nE) 150", answer: "C" },
    { prompt: "Quantos anagramas da palavra CAPITULO começam por vogal e terminam por consoante?\nA) 720\nB) 2.880\nC) 5.760\nD) 11.520\nE) 40.320", answer: "D" },
    { prompt: "Um clube tem 8 titulares e 6 reservas. O técnico escolhe 3 titulares e 2 reservas para uma equipe e, em seguida, define a ordem dos 5 batedores em uma disputa de pênaltis. Qual expressão representa o total de maneiras?\nA) C(8, 3) × C(6, 2) × 5!\nB) (C(8, 3) + C(6, 2)) × 5!\nC) A(8, 3) × A(6, 2) × 5!\nD) C(14, 5) × 5!\nE) C(8, 3) × C(6, 2) × 2!", answer: "A" }
  ],
  4: [
    { prompt: "Um laboratório escolhe uma solução (6 opções), um sensor (5 opções), uma temperatura (4 opções) e um modo de calibração (3 opções). O sensor S1 só pode ser usado na temperatura T4, e o modo M3 não pode ser usado com a solução S6. Quantos protocolos válidos existem?\nA) 280\nB) 286\nC) 289\nD) 295\nE) 306", answer: "C" },
    { prompt: "Quantos anagramas distintos podem ser formados com todas as letras de MATEMATICA?\nA) 75.600\nB) 100.800\nC) 151.200\nD) 302.400\nE) 3.628.800", answer: "C" },
    { prompt: "Oito convidados vão se sentar ao redor de uma mesa redonda. De quantas maneiras podem se organizar se duas pessoas específicas devem ficar lado a lado?\nA) 720\nB) 1.440\nC) 2.520\nD) 5.040\nE) 10.080", answer: "B" },
    { prompt: "Quantos anagramas distintos da palavra ARQUITETO começam por vogal e terminam por consoante?\nA) 25.200\nB) 40.320\nC) 50.400\nD) 100.800\nE) 201.600", answer: "C" },
    { prompt: "Usando os algarismos de 0 a 7, quantos números pares de cinco algarismos distintos podem ser formados?\nA) 1.920\nB) 2.160\nC) 2.880\nD) 3.000\nE) 3.360", answer: "D" },
    { prompt: "Quantos números de quatro algarismos distintos, formados com os algarismos de 1 a 8, são divisíveis por 5?\nA) 168\nB) 196\nC) 210\nD) 280\nE) 336", answer: "C" },
    { prompt: "Seis pessoas distintas formarão uma fila. Uma pessoa específica ficará na primeira posição, e outras duas pessoas específicas não podem ficar lado a lado. Quantas filas são possíveis?\nA) 48\nB) 60\nC) 72\nD) 96\nE) 120", answer: "C" },
    { prompt: "Um arquivo possui 11 propostas, e duas propostas específicas não podem ser aprovadas juntas. De quantas maneiras uma comissão pode escolher 5 propostas respeitando essa regra?\nA) 294\nB) 336\nC) 378\nD) 420\nE) 462", answer: "C" },
    { prompt: "Uma escola tem 3 projetos de robótica e 4 de artes. Uma comissão de 4 projetos deve incluir pelo menos 2 de robótica. Quantas comissões podem ser formadas?\nA) 18\nB) 20\nC) 22\nD) 28\nE) 35", answer: "C" },
    { prompt: "Quantas diagonais tem um polígono convexo de 12 lados?\nA) 48\nB) 54\nC) 60\nD) 66\nE) 72", answer: "B" },
    { prompt: "De um grupo com 5 mulheres e 7 homens serão escolhidas 3 pessoas. A seleção deve incluir pelo menos uma mulher e pelo menos um homem. Quantas seleções são possíveis?\nA) 140\nB) 160\nC) 175\nD) 185\nE) 200", answer: "C" },
    { prompt: "Quantas sequências podem ser formadas usando uma vez cada letra A, B, C, D, E e F, começando por uma vogal e terminando por uma consoante?\nA) 96\nB) 144\nC) 192\nD) 240\nE) 288", answer: "C" },
    { prompt: "Quantos números de cinco algarismos distintos podem ser formados com os dígitos de 0 a 9 se o último algarismo deve ser ímpar?\nA) 10.080\nB) 12.096\nC) 13.440\nD) 15.120\nE) 18.144", answer: "C" },
    { prompt: "Um código ordenado de 4 símbolos é escolhido entre 9 símbolos distintos. Dois símbolos específicos não podem aparecer juntos no código. Quantos códigos são possíveis?\nA) 2.016\nB) 2.160\nC) 2.520\nD) 2.880\nE) 3.024", answer: "C" },
    { prompt: "Oito fichas idênticas serão distribuídas entre três quiosques identificados, com cada quiosque recebendo pelo menos uma ficha. Quantas distribuições são possíveis?\nA) 15\nB) 18\nC) 21\nD) 24\nE) 28", answer: "C" }
  ],
  5: [
    { prompt: "Entre os números de 1 a 1.000, quantos são divisíveis por 4, 6 ou 9?\nA) 389\nB) 420\nC) 444\nD) 500\nE) 555", answer: "A" },
    { prompt: "Seis cartas diferentes serão colocadas, uma em cada envelope com destinatário correspondente. De quantas maneiras podem ser distribuídas sem que nenhuma carta vá para o envelope correto?\nA) 120\nB) 144\nC) 185\nD) 265\nE) 720", answer: "D" },
    { prompt: "Oito apresentações distintas serão colocadas em uma programação. A apresentação A deve ocorrer antes da B, e a C antes da D. Quantas programações atendem às duas condições?\nA) 2.520\nB) 5.040\nC) 10.080\nD) 20.160\nE) 40.320", answer: "C" },
    { prompt: "Uma joia em forma de colar será feita com 8 contas distintas. Rotações e reflexos do colar representam a mesma peça. Quantos colares diferentes podem ser montados?\nA) 720\nB) 1.440\nC) 2.520\nD) 5.040\nE) 20.160", answer: "C" },
    { prompt: "Quantos números pares de seis algarismos distintos podem ser formados com os dígitos de 0 a 9?\nA) 20.160\nB) 53.760\nC) 68.880\nD) 75.600\nE) 90.720", answer: "C" },
    { prompt: "Um grupo de 7 pessoas será escolhido entre 4 cientistas, 5 engenheiros e 3 designers. A seleção deve incluir pelo menos 2 de cada profissão. Quantos grupos são possíveis?\nA) 300\nB) 320\nC) 360\nD) 420\nE) 480", answer: "C" },
    { prompt: "Em uma malha, um trajeto mínimo tem 8 passos para leste e 7 para norte. Quantos caminhos mínimos não passam pelo ponto (4,3)?\nA) 3.250\nB) 3.625\nC) 3.985\nD) 4.150\nE) 6.435", answer: "C" },
    { prompt: "Em um baralho padrão de 52 cartas, quantas mãos de 5 cartas formam exatamente um full house (trinca e par)?\nA) 1.872\nB) 3.744\nC) 4.680\nD) 5.624\nE) 6.240", answer: "B" },
    { prompt: "Quantas permutações dos algarismos 1 a 8 não têm o par 1–2 junto nem o par 3–4 junto?\nA) 20.160\nB) 22.320\nC) 23.040\nD) 24.120\nE) 40.320", answer: "C" },
    { prompt: "Sete prêmios diferentes serão entregues a três departamentos identificados, e cada departamento deve receber pelo menos um prêmio. De quantas maneiras isso pode ser feito?\nA) 1.260\nB) 1.470\nC) 1.806\nD) 2.187\nE) 2.400", answer: "C" },
    { prompt: "Uma sequência binária tem 12 posições. Quantas sequências contêm exatamente quatro algarismos 1, sem que dois 1 fiquem em posições consecutivas?\nA) 105\nB) 120\nC) 126\nD) 165\nE) 220", answer: "C" },
    { prompt: "Uma equipe de 6 especialistas será escolhida entre 5 cientistas, 4 engenheiros e 3 designers. Deve haver pelo menos 2 cientistas e pelo menos 1 engenheiro. Quantas equipes podem ser formadas?\nA) 684\nB) 720\nC) 784\nD) 840\nE) 920", answer: "C" },
    { prompt: "Em uma mesa circular com 12 lugares, quantos grupos de 4 lugares podem ser escolhidos sem que dois lugares escolhidos sejam vizinhos?\nA) 84\nB) 90\nC) 105\nD) 120\nE) 126", answer: "C" },
    { prompt: "Um conselho de 4 pessoas será escolhido entre três áreas com 4, 3 e 2 candidatos. O conselho deve ter pelo menos uma pessoa de cada área. Quantos conselhos são possíveis?\nA) 60\nB) 72\nC) 84\nD) 96\nE) 108", answer: "B" },
    { prompt: "De quantas maneiras 10 atletas podem ser divididos em duas equipes não identificadas de 5 atletas cada?\nA) 63\nB) 90\nC) 120\nD) 126\nE) 252", answer: "D" }
  ]
};

const LEVEL_COUNT = 5;
const MATCH_DURATION_MS = 900_000;
const MAX_WRONG_STREAK = 5;
const PHASE_REQUIREMENTS = { 2: 2, 3: 2, 4: 3, 5: 4 };
const STORAGE_KEY = "enigma-progress-v1";
const screens = [...document.querySelectorAll(".screen")];
const path = document.getElementById("level-path");
const feedback = document.getElementById("answer-feedback");
const answerOptions = document.getElementById("answer-options");
const matchHud = document.getElementById("match-hud");
let progress = loadProgress();
let currentLevel = 1;
let currentQuestionIndex = 0;
let timerInterval = null;

function freshProgress() {
  return { unlocked: 1, completed: [], correctByLevel: {}, active: false, startedAt: null, wrongStreak: 0, lastOutcome: null, lastRemainingMs: null };
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || typeof saved !== "object") return freshProgress();
    const correctByLevel = {};
    if (saved.correctByLevel && typeof saved.correctByLevel === "object") {
      for (const [level, indices] of Object.entries(saved.correctByLevel)) {
        const bank = QUESTIONS[Number(level)] || [];
        correctByLevel[level] = Array.isArray(indices) ? indices.filter(index => Number.isInteger(index) && index >= 0 && index < bank.length) : [];
      }
    }
    return {
      unlocked: Math.min(LEVEL_COUNT, Math.max(1, Number(saved.unlocked) || 1)),
      completed: Array.isArray(saved.completed) ? saved.completed.filter(n => Number.isInteger(n) && n >= 1 && n <= LEVEL_COUNT) : [],
      correctByLevel,
      active: Boolean(saved.active && Number(saved.startedAt)),
      startedAt: Number(saved.startedAt) || null,
      wrongStreak: Math.min(MAX_WRONG_STREAK, Math.max(0, Number(saved.wrongStreak) || 0)),
      lastOutcome: saved.lastOutcome || null,
      lastRemainingMs: saved.lastRemainingMs != null && Number.isFinite(Number(saved.lastRemainingMs)) ? Number(saved.lastRemainingMs) : null
    };
  } catch { return freshProgress(); }
}

function saveProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch { /* The current match still works for this tab. */ }
}

function showScreen(name) {
  screens.forEach(screen => {
    const active = screen.id === `screen-${name}`;
    screen.hidden = !active;
    screen.classList.toggle("active", active);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderMap() {
  path.innerHTML = "";
  for (let level = 1; level <= LEVEL_COUNT; level++) {
    const unlocked = level <= progress.unlocked;
    const completed = progress.completed.includes(level);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `level-card${unlocked ? " unlocked" : ""}${completed ? " completed" : ""}`;
    button.disabled = !unlocked || !progress.active;
    button.setAttribute("aria-label", `Fase ${level}${completed ? ", concluída" : unlocked ? ", desbloqueada" : ", bloqueada"}`);
    const status = completed ? "CONCLUÍDA" : unlocked ? "DESBLOQUEADA" : "BLOQUEADA";
    button.innerHTML = `<span class="level-number">${String(level).padStart(2, "0")}</span><span class="level-name">Fase ${String(level).padStart(2, "0")}</span><span class="level-status">${status}</span><span class="level-icon" aria-hidden="true">${completed ? "✓" : unlocked ? "↗" : "⌑"}</span>`;
    if (!button.disabled) button.addEventListener("click", () => openLevel(level));
    path.append(button);
  }
  document.getElementById("map-progress").textContent = `${progress.completed.length} DE 5 FASES CONCLUÍDAS`;
}

function getOptions(question) {
  if (!question) return [];
  if (Array.isArray(question.options)) return question.options;
  return question.prompt.split("\n").slice(1).map(line => {
    const match = line.match(/^\s*([A-E])\)\s*(.*)$/);
    return match ? { letter: match[1], text: match[2] } : null;
  }).filter(Boolean);
}

function openLevel(level) {
  if (!progress.active || level > progress.unlocked) return;
  if (!progress.startedAt && level === 1) {
    progress.startedAt = Date.now();
    progress.lastRemainingMs = MATCH_DURATION_MS;
    saveProgress();
    startTimer();
  }
  currentLevel = level;
  currentQuestionIndex = chooseQuestion(level);
  showQuestion();
  showScreen("puzzle");
}

function showQuestion() {
  const bank = QUESTIONS[currentLevel] || [];
  const question = bank[currentQuestionIndex];
  document.getElementById("level-chip").textContent = `FASE ${String(currentLevel).padStart(2, "0")} / 05`;
  const difficulty = { 1: "FÁCIL", 2: "FÁCIL", 3: "INTERMEDIÁRIO", 4: "DIFÍCIL", 5: "AVANÇADO" }[currentLevel];
  document.querySelector(".difficulty").innerHTML = `<i></i> ${difficulty}`;
  document.getElementById("big-number").textContent = String(currentLevel).padStart(2, "0");
  document.getElementById("question-number").textContent = String(currentQuestionIndex + 1).padStart(2, "0");
  const required = PHASE_REQUIREMENTS[currentLevel] || 1;
  const phaseScore = required > 1 ? ` · ${correctCount(currentLevel)}/${required}` : "";
  document.getElementById("puzzle-progress").textContent = `${String(currentLevel).padStart(2, "0")} DE 05${phaseScore}`;
  document.getElementById("puzzle-title").textContent = question ? `Fase ${String(currentLevel).padStart(2, "0")}.` : `Fase ${String(currentLevel).padStart(2, "0")}.`;
  const lines = question?.prompt.split("\n") || [];
  document.getElementById("question-prompt").textContent = lines[0] || "As questões desta fase serão adicionadas em breve.";
  answerOptions.innerHTML = "";
  const options = getOptions(question);
  answerOptions.hidden = !options.length;
  options.forEach(option => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.setAttribute("aria-label", `Alternativa ${option.letter}: ${option.text}`);
    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = option.letter;
    const text = document.createElement("span");
    text.className = "option-text";
    text.textContent = option.text;
    button.append(letter, text);
    button.addEventListener("click", () => checkAnswer(option.letter));
    answerOptions.append(button);
  });
  feedback.textContent = "";
  feedback.className = "feedback";
  updateHud();
}

function formatTime(milliseconds) {
  const seconds = Math.max(0, Math.ceil(milliseconds / 1000));
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

function remainingTime() {
  if (!progress.startedAt) return MATCH_DURATION_MS;
  return Math.max(0, MATCH_DURATION_MS - (Date.now() - progress.startedAt));
}

function updateHud() {
  const hasMatchTime = Boolean(progress.startedAt) && progress.active || progress.lastOutcome === "timeout" || progress.lastOutcome === "mistakes" || progress.lastOutcome === "victory";
  matchHud.hidden = !hasMatchTime;
  const remaining = progress.active ? remainingTime() : (progress.lastRemainingMs ?? MATCH_DURATION_MS);
  document.getElementById("timer-display").textContent = formatTime(remaining);
  matchHud.classList.toggle("timer-warning", progress.active && remaining <= 60_000);
  document.getElementById("wrong-count").textContent = String(progress.wrongStreak);
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  if (!progress.active || !progress.startedAt) return;
  const tick = () => {
    const remaining = remainingTime();
    updateHud();
    if (remaining <= 0) endMatch("timeout");
  };
  tick();
  if (progress.active && progress.startedAt) timerInterval = setInterval(tick, 250);
}

function startMatch() {
  if (timerInterval) clearInterval(timerInterval);
  progress = { ...freshProgress(), active: true };
  currentLevel = 1;
  currentQuestionIndex = 0;
  saveProgress();
  updateHud();
  renderMap();
  showScreen("map");
  startTimer();
}

function showGameOver(reason) {
  const title = document.getElementById("game-over-title");
  const copy = document.getElementById("game-over-copy");
  if (reason === "timeout") {
    title.textContent = "O tempo acabou.";
    copy.textContent = "Os 15 minutos terminaram. Inicie uma nova partida para tentar novamente.";
  } else {
    title.textContent = "Cinco erros seguidos.";
    copy.textContent = "A partida foi encerrada. Inicie uma nova para tentar novamente.";
  }
  updateHud();
  showScreen("game-over");
}

function endMatch(reason) {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  const remaining = reason === "timeout" ? 0 : remainingTime();
  progress = { ...freshProgress(), wrongStreak: reason === "mistakes" ? MAX_WRONG_STREAK : 0, lastOutcome: reason, lastRemainingMs: remaining };
  saveProgress();
  showGameOver(reason);
}

function requiredCorrect(level) {
  return PHASE_REQUIREMENTS[level] || 1;
}

function correctCount(level) {
  return (progress.correctByLevel[level] || []).length;
}

function chooseQuestion(level, previousIndex = null) {
  const bank = QUESTIONS[level] || [];
  if (!bank.length) return 0;
  const solved = new Set(progress.correctByLevel[level] || []);
  let choices = bank.map((_, index) => index).filter(index => !solved.has(index) && index !== previousIndex);
  if (!choices.length) choices = bank.map((_, index) => index).filter(index => index !== previousIndex);
  if (!choices.length) return 0;
  return choices[Math.floor(Math.random() * choices.length)];
}

function checkAnswer(selectedLetter) {
  if (!progress.active) return;
  const bank = QUESTIONS[currentLevel] || [];
  const question = bank[currentQuestionIndex];
  if (!question) return;
  if (selectedLetter.toUpperCase() === question.answer.toUpperCase()) {
    progress.wrongStreak = 0;
    const alreadyCompleted = progress.completed.includes(currentLevel);
    const solvedQuestions = progress.correctByLevel[currentLevel] || [];
    if (!alreadyCompleted && !solvedQuestions.includes(currentQuestionIndex)) solvedQuestions.push(currentQuestionIndex);
    progress.correctByLevel[currentLevel] = solvedQuestions;
    const required = requiredCorrect(currentLevel);
    if (!alreadyCompleted && solvedQuestions.length < required) {
      currentQuestionIndex = chooseQuestion(currentLevel, currentQuestionIndex);
      saveProgress();
      showQuestion();
      feedback.textContent = `Resposta certa! ${solvedQuestions.length} de ${required}. Acerte mais uma questão para concluir a Fase ${String(currentLevel).padStart(2, "0")}.`;
      feedback.className = "feedback success";
      return;
    }
    if (!progress.completed.includes(currentLevel)) progress.completed.push(currentLevel);
    progress.unlocked = Math.max(progress.unlocked, Math.min(LEVEL_COUNT, currentLevel + 1));
    if (currentLevel === LEVEL_COUNT) {
      progress.active = false;
      progress.lastOutcome = "victory";
      progress.lastRemainingMs = remainingTime();
      if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    }
    saveProgress();
    renderMap();
    const hasNext = currentLevel < LEVEL_COUNT;
    document.getElementById("complete-title").innerHTML = hasNext ? `Boa! Você<br><span class="accent-word">desbloqueou</span><br>a próxima fase.` : `Você chegou<br>ao <span class="accent-word">final!</span>`;
    document.getElementById("complete-copy").textContent = hasNext ? "A jornada continua. Tem mais um desafio esperando por você." : "Você concluiu as cinco fases. Que jornada!";
    const continueButton = document.getElementById("continue-button");
    continueButton.hidden = false;
    continueButton.innerHTML = hasNext ? `Ir para a fase ${String(currentLevel + 1).padStart(2, "0")} <span aria-hidden="true">↗</span>` : "Jogar novamente <span aria-hidden=\"true\">↻</span>";
    continueButton.onclick = hasNext ? () => openLevel(currentLevel + 1) : startMatch;
    updateHud();
    showScreen("complete");
  } else {
    progress.wrongStreak++;
    if (progress.wrongStreak >= MAX_WRONG_STREAK) {
      endMatch("mistakes");
      return;
    }
    saveProgress();
    currentQuestionIndex = chooseQuestion(currentLevel, currentQuestionIndex);
    showQuestion();
    feedback.textContent = `Resposta incorreta. Outra questão foi carregada. Erros seguidos: ${progress.wrongStreak} de ${MAX_WRONG_STREAK}.`;
    feedback.className = "feedback";
  }
}

document.getElementById("start-button").addEventListener("click", () => {
  if (progress.active) { renderMap(); showScreen("map"); startTimer(); }
  else startMatch();
});
document.querySelectorAll("[data-nav]").forEach(button => button.addEventListener("click", event => {
  const target = event.currentTarget.dataset.nav;
  if (target === "map") renderMap();
  showScreen(target);
}));
document.getElementById("new-match-button").addEventListener("click", startMatch);
document.getElementById("reset-button").addEventListener("click", startMatch);

if (progress.active) {
  document.getElementById("start-button").textContent = "Continuar partida ↗";
  if (progress.startedAt) startTimer();
  else updateHud();
} else if (progress.lastOutcome === "timeout" || progress.lastOutcome === "mistakes") {
  showGameOver(progress.lastOutcome);
} else if (progress.lastOutcome === "victory") {
  document.getElementById("start-button").textContent = "Jogar novamente ↗";
  updateHud();
}




