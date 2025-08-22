// Lista de exemplos de operadores em JavaScript
// Cada objeto dentro do array representa UM operador, com:
// - titulo: o nome + exemplo do operador
// - codigo: o código que será testado (string que vamos executar com eval)
// - descricao: uma breve explicação do que o operador faz
const exemplos = [
  {
    titulo: "Operador de Soma (+) => 5 + 3",
    codigo: "5 + 3",
    descricao: "Adiciona dois valores.",
  },
  {
    titulo: "Operador de Subtração (-) => 10 - 4",
    codigo: "10 - 4",
    descricao: "Subtrai o segundo valor do primeiro.",
  },
  {
    titulo: "Operador de Multiplicação (*) => 6 * 7",
    codigo: "6 * 7",
    descricao: "Multiplica dois valores.",
  },
  {
    titulo: "Operador de Divisão (/) => 20 / 4",
    codigo: "20 / 4",
    descricao: "Divide o primeiro valor pelo segundo.",
  },
  {
    titulo: "Operador de Módulo (%) => 10 % 3",
    codigo: "10 % 3",
    descricao: "Resto da divisão do primeiro pelo segundo.",
  },
  {
    titulo: "Operador de Igualdade (==) => 5 == '5'",
    codigo: '5 == "5"',
    descricao: "Verifica se dois valores são iguais (sem checar tipo).",
  },
  {
    titulo: "Operador de Igualdade Estrita (===) => 5 === '5'",
    codigo: '5 === "5"',
    descricao: "Verifica igualdade de valor e tipo.",
  },
  {
    titulo: "Operador Lógico AND (&&) => true && false",
    codigo: "(true && false)",
    descricao: "Só retorna verdadeiro se ambos forem true.",
  },
  {
    titulo: "Operador Lógico OR (||) => false || true",
    codigo: "(false || true)",
    descricao: "Retorna verdadeiro se pelo menos um for true.",
  },
  {
    titulo: "Operador Lógico NOT (!)  => !true",
    codigo: "!true",
    descricao: "Inverte o valor lógico.",
  },
  {
    titulo: "Operador Ternário (?:) => 5 > 3 ? 'Maior' : 'Menor'",
    codigo: '(5 > 3 ? "Maior" : "Menor")',
    descricao: "Retorna um valor dependendo da condição.",
  },
  {
    titulo: "Operador de Concatenação (+) => 'Naruto' + ' Uzumaki'",
    codigo: '"Naruto" + " Uzumaki"',
    descricao: "Une duas strings.",
  },
  {
    titulo: "Operador Spread (...) => [... [1,2,3], ... [4,5]]",
    codigo: "[... [1,2,3], ... [4,5]]",
    descricao: "Expande arrays ou objetos.",
  },
  {
    titulo: "Desestruturação de Arrays ([a, b]) => [10, 20]",
    codigo: "const [a,b] = [10,20]; `${a}, ${b}`",
    descricao: "Extrai valores de arrays.",
  },
  {
    titulo: "Coalescência Nula (??) => null ?? 'Valor padrão'",
    codigo: 'null ?? "Valor padrão"',
    descricao: "Retorna o primeiro valor não nulo/undefined.",
  },
  {
    titulo: "typeof => typeof 123",
    codigo: "typeof 123",
    descricao: "Retorna o tipo do valor.",
  },
  {
    titulo: "instanceof => (new Date()) instanceof Date",
    codigo: "(new Date()) instanceof Date",
    descricao: "Verifica se o objeto é instância de uma classe.",
  },
];

// Pega a <div id="operadores"> do HTML
// Esse será o container onde vamos injetar os cards
const container = document.getElementById("operadores");

// Percorre cada operador da lista "exemplos"
exemplos.forEach((exemplo) => {
  // Cria um card (div) para cada operador
  const card = document.createElement("div");
  card.className = "card";

  // Estrutura HTML do card com título, descrição, botão e área de resultado
  card.innerHTML = `
    <h3>${exemplo.titulo}</h3>
    <p>${exemplo.descricao}</p>
    <button>Testar</button>
    <div class="resultado"></div>
  `;

  // Pega o botão e o div de resultado dentro do card
  const btn = card.querySelector("button");
  const output = card.querySelector(".resultado");

  // Adiciona um evento de clique no botão
  btn.addEventListener("click", () => {
    try {
      // Executa o código do exemplo usando eval()
      // ⚠️ eval executa código como se tivesse sido escrito no JS direto
      // Aqui é seguro pq os códigos já estão definidos por você
      const resultado = eval(exemplo.codigo);

      // Mostra o código rodado e o resultado na tela
      output.textContent = `Código: ${exemplo.codigo} → Resultado: ${resultado}`;
    } catch (e) {
      // Se der erro (ex.: sintaxe), mostra a mensagem de erro
      output.textContent = `Erro ao executar: ${e.message}`;
    }
  });

  // Coloca o card dentro do container (na página)
  container.appendChild(card);
});
