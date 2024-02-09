const perguntas = [
    {
      pergunta: "O que significa a sigla 'DOM' em JavaScript?",
      respostas: [
        "Documento de Objeto Móvel",
        "Domínio de Objetos Móveis",
        "Modelo de Objeto de Documento"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Determinar o tipo de dado de uma variável",
        "Realizar uma operação de multiplicação",
        "Comparar dois valores"
      ],
      correta: 0
    },
    {
      pergunta: "O que é 'Hoisting' em JavaScript?",
      respostas: [
        "Elevar um elemento do HTML",
        "Içar uma variável ou função para o topo do seu escopo",
        "Inserir um elemento no final de um array"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a principal diferença entre 'let' e 'const' em relação à declaração de variáveis?",
      respostas: [
        "let é usado para números e const é usado para strings",
        "let permite reatribuição, enquanto const não permite",
        "const é utilizado apenas em loops, enquanto let é usado fora de loops"
      ],
      correta: 1
    },
    {
      pergunta: "O que é 'callback' em JavaScript?",
      respostas: [
        "Uma função que chama outra função",
        "Um evento de clique em um botão",
        "Um método para remover elementos de um array"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é utilizado para adicionar um elemento no final de um array em JavaScript?",
      respostas: [
        "push()",
        "pop()",
        "splice()"
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma 'Promise' em JavaScript?",
      respostas: [
        "Um tipo de variável",
        "Um objeto que representa o resultado de uma operação assíncrona",
        "Um tipo de estrutura condicional"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'map()' em arrays JavaScript?",
      respostas: [
        "Filtrar elementos do array",
        "Mapear elementos para um novo array, aplicando uma função",
        "Inverter a ordem dos elementos do array"
      ],
      correta: 1
    },
    {
      pergunta: "O que é 'ES6' em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um padrão de desenvolvimento web",
        "Uma versão do ECMAScript com melhorias, incluindo let e const"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '=== ' em comparações em JavaScript?",
      respostas: [
        "Comparar valores sem considerar o tipo",
        "Comparar valores e tipos estritamente",
        "Concatenar strings"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estacorreta = event.target.value == item.correta
    corretas.delete(item)
    if(estacorreta){
      corretas.add(item)
    }
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
  quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  } 