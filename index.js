const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        resposta: [
            "Uma linguagem de marcação",
            "Uma linguagem de programação",
            "Um banco de dados"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        resposta: [
            "Comparação de valores apenas",
            "Comparação de valores e tipos",
            "Concatenação de strings"
        ],
        correta: 1
    },
    {
        pergunta: "Como se declara uma variável em JavaScript?",
        resposta: [
            "var minhaVar;",
            "variavel = 10;",
            "const = minhaVar"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o método utilizado para exibir uma mensagem de alerta em JavaScript?",
        resposta: [
            "msgBox('Olá Mundo!');",
            "alert('Olá Mundo!');",
            "console.log('Olá Mundo!');"
        ],
        correta: 1
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        resposta: [
            "Documento Original do Modelo",
            "Dicionário de Objetos Móveis",
            "Modelo de Objeto do Documento"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a finalidade do operador ternário em JavaScript?",
        resposta: [
            "Atribuição de valores a variáveis",
            "Comparação de três valores",
            "Substituição de if-else em expressões curtas"
        ],
        correta: 2
    },
    {
        pergunta: "O que é closure em JavaScript?",
        resposta: [
            "Uma função que não retorna valor",
            "Um bloco de código dentro de uma função",
            "A combinação de uma função e o ambiente léxico em que ela foi declarada"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o operador utilizado para concatenar strings em JavaScript?",
        resposta: [
            "&",
            "+",
            "||"
        ],
        correta: 1
    },
    {
        pergunta: "Como se chama a prática de vincular uma função a um objeto em JavaScript?",
        resposta: [
            "Vinculação de Função",
            "Associação de Método",
            "Encapsulamento"
        ],
        correta: 1
    },
    {
        pergunta: "O que é JSON em JavaScript?",
        resposta: [
            "Java Serialized Object Notation",
            "JavaScript Object Notation",
            "Just Simple Object Notation"
        ],
        correta: 1
    }
];


//Selecionar algo do documento HTML
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const correta = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = correta.size + '  de ' +totalDePerguntas

//loop ou laço de repetição
for(const item of perguntas){
    //cloneNode(true) pega tudo que está dentro da função
	const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent=item.pergunta
	
  for(let resposta of item.resposta){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    
    //Nesse caso altera a informação dentro do span
    dt.querySelector('span').textContent = resposta

    //Para atribuir valor no input do HTML
    dt.querySelector('input').setAttribute('name', 'pergunta-'+perguntas.indexOf(item))
    dt.querySelector('input').value = item.resposta.indexOf(resposta)

    //Descobrir qual resposta foi selecionada
    dt.querySelector('input').onchange = (event) => {

        correta.delete(item)
        if(event.target.value==item.correta){
            correta.add(item)
        }

        mostrarTotal.textContent = correta.size + 'de' +totalDePerguntas

    }
    

    //adicionar um filho para dl
    quizItem.querySelector('dl').appendChild(dt)

  }

  quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela

  quiz.appendChild(quizItem)
}