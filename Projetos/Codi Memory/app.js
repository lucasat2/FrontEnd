
// Evento disparado quando o documento html foi completamente carregado.
document.addEventListener('DOMContentLoaded', () => {
    //Carregamento dos cards 
    const cardArray = [
        {
            name: 'ganhou',
            img: 'images/ganhou.png'
        },

        {
            name: 'ganhou',
            img: 'images/ganhou.png'
        },
        {
            name: 'direita',
            img: 'images/direita.png'
        },

        {
            name: 'direita',
            img: 'images/direita.png'
        },

        {
            name: 'tras',
            img: 'images/tras.png'
        },
        {
            name: 'tras',
            img: 'images/tras.png'
        },

        {
            name: 'correndo',
            img: 'images/correndo.png'
        },

        {
            name: 'correndo',
            img: 'images/correndo.png'
        },
        {
            name: 'pulo',
            img: 'images/pulo.png'
        },
        {
            name: 'pulo',
            img: 'images/pulo.png'
        },
        {
            name: 'esquerda',
            img: 'images/esquerda.png'
        },

        {
            name: 'esquerda',
            img: 'images/esquerda.png'
        }


    ]

    cardArray.sort(() => 0.5 - Math.random()) //deixa os cards aleatorios.

    const grid = document.querySelector('.grid');

    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenid = []
    var pares = []


    //Criando a tela do jogo

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/card.png') // os cards tem a mesma cara de interrogacao
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }

    }

    //Conferindo pares

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenid[0]
        const optionTwoId = cardsChosenid[1]

        // O que aconece se clicar 2x no mesmo card

        //Vira os cards de volta

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/card.png')
            cards[optionTwoId].setAttribute('src', 'images/card.png')
            alert("Você clicou na mesma imagem")
        }
        //Formando um par 
        else if (cardsChosen[0] == cardsChosen[1]) {
            alert("Voce conseguiu um par")
            cards[optionOneId].setAttribute('src', 'images/white.png') // deixa a imagem branca
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard) // desabilita o clique quando encontra
            cards[optionTwoId].removeEventListener('click', flipCard)
            pares.push(cardsChosen)

        }
        // Nao formando um par 
        else {
            cards[optionOneId].setAttribute('src', 'images/card.png')
            cards[optionTwoId].setAttribute('src', 'images/card.png')
            alert('Ops! Jogue novamente :)')
        }

        cardsChosen = []
        cardsChosenid = []
        resultDisplay.textContent = pares.length


        if (pares.length == cardArray.length / 2) {
            resultDisplay.textContent = 'Parabéns! Você encontrou todos os pares'
        }


    }

    //Virando Cards

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name) // pega a posicao onde o card esta e captura o nome
        cardsChosenid.push(cardId)
        this.setAttribute('src', cardArray[cardId].img) // se a imagem selecionada for ganhou, sera atriuido esse novo nome
        if (cardsChosen.length == 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard();
})