
/*Importa o Express, biblioteca usada para criar o servidor

 Em portugues : Quero usar o express
*/ 
const express = require("express"); 

/*Importa o CORS, que permite o frontend react acessar a API em node
*/
const cors = require("cors"); 

/* Importa os filmes do arquivo movies.js
*/
const movies = require("./data/movies");
  
/*Cria a aplicação/servidor usando o Express
*/ 
const app = express(); 

/*Libera o acesso da API para outros endereços, como o React
*/ 
app.use(cors()); 


/*Permite que a API receba dados em formato JSON
*/ 
app.use(express.json()); 


/*Envia uma resposta para quem acessou a rota

Quando alguém abrir "/"

Responda:

API DevFlix funcionando 
*/

app.get("/", (req, res) => {
  res.send("Bem-vindo ao Backend da DevFlix 🎬🚀"); 
});

/* Rota para puxar os filmes 
*/
app.get("/movies", (req, res) => {
    res.json(movies)
}); 

/*Rota para pegar o filme principal 

  Percorra os objetos da lista de filme e me entregue o que o atributi featured for igual
  a true. Me responda com o filme armazenado na variavel featuredMovie.

  O .find() percorre uma lista (array) e devolve o primeiro item que atender à condição que você definiu.

  Se encontrar, ele entrega o item inteiro.

  Se não encontrar ninguém que bata com a regra, ele devolve undefined
*/
app.get("/featured", (req, res) => {
  const featuredMovie = movies.find(movie => movie.featured === true);
  res.json(featuredMovie);
});

/* Rota para pegar um filme por id 
*/

app.get("/movies/:id", (req, res) => {
    const id = Number(req.params.id);
    const movie = movies.find(item => item.id === id);
    if (!movie) {
        return res.status(404).json({
            message: "Filme não encontrado"
        });
    }
    res.json(movie);
});


/*Rota para fazer o login usando Post 

  // Pega o email e a senha enviados pelo corpo da requisição
  // Esses dados vêm do frontend ou do Thunder Client/Postman

  const { email, password } = req.body;
  */

app.post("/login", (req, res) => {
    
    const { email, password } = req.body;

  if (email === "user@devflix.com" && password === "123456"){
    return res.json({
      success: true,
      message: "Login realizado com sucesso",
      user: {
        name: "Usuário DevFlix",
        email: email
      }
    });
  }
    
  res.status(401).json({
    success: false,
    message: "Email ou senha inválidos"
  });
});


/* Mostra uma mensagem no terminal quando o servidor estiver rodando
*/ 
app.listen(3000, () => {
  console.log(
    "Servidor rodando em http://localhost:3000"  
  );
});