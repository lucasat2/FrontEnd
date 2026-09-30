const cores = ['#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', '#d7aefb']; // Lista com os códigos hexadecimais das cores disponíveis para as notas

let indice_da_cor = 0; // Variável que guarda a posição da cor atual na lista de cores

const adicionar_nota = document.getElementById('adicionar_nota'); // Pega o botão de adicionar nota pelo ID do HTML
const titulo_da_nota = document.getElementById('titulo_da_nota'); // Pega o campo de texto do título pelo ID do HTML
const conteudo_da_nota = document.getElementById('conteudo_da_nota'); // Pega o campo de texto do conteúdo pelo ID do HTML
const tags_da_nota = document.getElementById('tags_da_nota'); // Pega o campo de texto das tags pelo ID do HTML
const lista_de_notas = document.getElementById('lista_de_notas'); // Pega o container onde as notas serão exibidas pelo ID do HTML

document.addEventListener('DOMContentLoaded', carregar_notas); // Executa a função carregar_notas assim que a página terminar de carregar

adicionar_nota.addEventListener('click', add_nota); // Executa a função add_nota quando o usuário clica no botão adicionar

function add_nota() { // Função responsável por criar e registrar uma nova nota
    const titulo = titulo_da_nota.value; // Guarda o texto digitado no campo de título
    const conteudo = conteudo_da_nota.value; // Guarda o texto digitado no campo de conteúdo
    const tags = tags_da_nota.value.split(',').map(tag => tag.trim()); // Separa as tags por vírgula e remove espaços extras das pontas

    if (titulo && conteudo) { // Verifica se os campos de título e conteúdo não estão vazios
        const nota = { // Cria o objeto da nota com todos os seus dados
            id: Date.now(), // Gera um número único usando a hora atual
            titulo, // Define o título da nota
            conteudo, // Define o texto da nota
            tags, // Define a lista de tags da nota
            cor: pegue_cor() // Define a cor da nota chamando a função
        };

        salvar_no_local_storage(nota); // Salva a nova nota na memória do navegador
        mostrar_nota(nota); // Desenha a nova nota na tela

        titulo_da_nota.value = ''; // Limpa o campo de título após salvar
        conteudo_da_nota.value = ''; // Limpa o campo de conteúdo após salvar
        tags_da_nota.value = ''; // Limpa o campo de tags após salvar
    }
}

function pegue_cor() { // Função que escolhe a próxima cor da lista em sequência
    const cor = cores[indice_da_cor]; // Seleciona a cor que está na posição atual
    indice_da_cor = (indice_da_cor + 1) % cores.length; // Avança para a próxima posição e volta ao início ao chegar no fim
    return cor; // Devolve a cor selecionada
}

function mostrar_nota(nota) { // Função responsável por montar o visual da nota e colocar na tela
    const notaItem = document.createElement('div'); // Cria um novo elemento de bloco (div) na página
    notaItem.classList.add('nota-item'); // Adiciona a classe visual para estilização CSS
    notaItem.setAttribute('id-nota', nota.id); // Adiciona um atributo com o ID único para identificar essa nota depois
    notaItem.style.backgroundColor = nota.cor; // Aplica a cor de fundo definida para a nota

    notaItem.innerHTML = `
        <h3>${nota.titulo}</h3>
        <p>${nota.conteudo}</p>
        <div class="tags">${nota.tags.map(tag => `#${tag}`).join(' ')}</div>
        <button onclick="deletar_nota(${nota.id})">Excluir</button>`; // Constrói o HTML interno da nota com título, texto, tags e botão de excluir

    lista_de_notas.appendChild(notaItem); // Insere o elemento da nota dentro da lista principal na tela
}

function carregar_notas() { // Função que busca as notas salvas e as exibe na tela ao abrir a página
    const notas = pegar_notas_do_local_storage(); // Busca todas as notas salvas no navegador
    notas.forEach(nota => mostrar_nota(nota)); // Passa por cada nota encontrada e manda exibir na tela
}

function salvar_no_local_storage(nota) { // Função que adiciona uma nova nota ao armazenamento do navegador
    const notas = pegar_notas_do_local_storage(); // Pega a lista de notas que já estavam salvas
    notas.push(nota); // Adiciona a nova nota no final dessa lista
    localStorage.setItem('notas', JSON.stringify(notas)); // Salva a lista completa em formato de texto no navegador
}

function pegar_notas_do_local_storage() { // Função auxiliar para ler e converter as notas salvas no navegador
    return localStorage.getItem('notas') ? JSON.parse(localStorage.getItem('notas')) : []; // Lê o texto salvo e converte de volta para lista (ou entrega lista vazia se não houver nada)
}

function deletar_nota(id) { // Função para remover uma nota tanto do armazenamento quanto da tela
    let notas = pegar_notas_do_local_storage(); // Busca as notas que estão salvas
    notas = notas.filter(nota => nota.id !== id); // Remove da lista apenas a nota que tem o ID clicado
    localStorage.setItem('notas', JSON.stringify(notas)); // Atualiza o armazenamento do navegador com a nova lista sem a nota excluída

    const elemento = document.querySelector(`[id-nota="${id}"]`); // Procura na tela o elemento visual correspondente ao ID
    if (elemento) { // Se encontrou o elemento na tela, remove ele da visualização
        elemento.remove();
    }
}