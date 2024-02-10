const perguntas = [
    {
    pergunta: "Qual é a maior lua de Júpiter?",
    respostas: [
      "Ganimedes",
      "Europa",
      "Calisto"
    ],
    correta: 0 // A resposta correta é "Ganimedes"
    },
    {
    pergunta: "Qual é a distância média da Terra ao Sol?",
    respostas: [
      "149,6 milhões de quilômetros",
      "100 milhões de quilômetros",
      "200 milhões de quilômetros"
    ],
    correta: 0 // A resposta correta é "149,6 milhões de quilômetros"
    },
    {
    pergunta: "Qual é o planeta mais próximo do Sol?",
    respostas: [
      "Mercúrio",
      "Vênus",
      "Marte"
    ],
    correta: 0 // A resposta correta é "Mercúrio"
    },
    {
 pergunta: "Qual é a maior lua de Saturno?",
    respostas: [
      "Titã",
      "Reia",
      "Dione"
    ],
    correta: 0 // A resposta correta é "Titã"
    },
    {
    pergunta: "Quem foi o primeiro ser humano a caminhar na Lua?",
    respostas: [
      "Neil Armstrong",
      "Buzz Aldrin",
      "Michael Collins"
    ],
    correta: 0 // A resposta correta é "Neil Armstrong"
    },
    {
  pergunta: "Qual é o maior planeta do sistema solar?",
    respostas: [
      "Júpiter",
      "Saturno",
      "Urano"
    ],
    correta: 0 // A resposta correta é "Júpiter"
    },
    {
    pergunta: "Qual é o nome da sonda da NASA que pousou em Marte em 2021?",
    respostas: [
      "Perseverance",
      "Curiosity",
      "Opportunity"
    ],
    correta: 0 // A resposta correta é "Perseverance"
    },
    {
    pergunta: "Qual é a estrela mais próxima da Terra, além do Sol?",
    respostas: [
      "Proxima Centauri",
      "Alpha Centauri A",
      "Alpha Centauri B"
    ],
    correta: 0 // A resposta correta é "Proxima Centauri"
    },
    {   
    pergunta: "Qual é o maior satélite natural do sistema solar?",
    respostas: [
      "Ganimedes",
      "Titã",
      "Lua"
    ],
    correta: 0 // A resposta correta é "Ganimedes"
    },
    {
  pergunta: "Quantos planetas anões existem oficialmente em nosso sistema solar?",
    respostas: [
      "5",
      "8",
      "13"
    ],
    correta: 0 // A resposta correta é "5"
    }
  ];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for(const item of perguntas) {
const quizItem = template.content.cloneNode(true)
quizItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta

    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
    }

    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  } 
  
  quizItem.querySelector('dl').appendChild(dt)
}

//fazer aparecer a resposta
quizItem.querySelector('dl dt').remove()


//coloca a pergunta na tela
quiz.appendChild(quizItem)
}