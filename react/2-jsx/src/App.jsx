// import Header from "./components/Header";
// import Banner from "./components/Banner";
// import Cursos from "./components/Cursos";
// import Footer from "./components/Footer";
// import NavBar from "./components/NavBar";
// import Contato from "./components/Contato";

function App() {


  const produto = {
    nome: "Mouse Gamer",
    preco: 180,
    marca: "TechPro",
    estoque: "7"
  };

  const imagem = "https://cdn.pixabay.com/photo/2014/03/20/00/00/computer-mouse-290950_1280.jpg"
  const link = "https://app.notion.com/p/Aula-2-JSX-9703fdd82db18334bc96814be06ac2f9"

  // const quantidade = 5;
  // const numero = 10;
  // const produto = "Mouse Gamer";
  // const preco = 120;
  // const nome = "react";
  // const nome2 = "Lucas"
  // const mensagem = `Olá ${nome2}, seja bem vindo!`
  // const idade = 19;

  return (
    // <div>
    //   <h1>{produto}</h1>
    //   <p>Olá,{nome}! Seja bem vindo!</p>
    //   <p>{mensagem}</p>
    //   <p>Dobro: {numero * 2}</p>
    //   <p>R${preco * 0.9}</p>
    //   <p>R${quantidade * preco}</p>
    //   <p>{nome.toUpperCase()}</p>
    //   <p>Seu nome possui {nome.length} letras.</p>
    //   <p>{idade >= 18 ? "Maior de idade" : "Menor de idade"}</p>
  
    // </div>

     

    <div className="card">
      
        {/* Cartao de produto */}
      <h1>{produto.nome}</h1>
      <p>Marca: {produto.marca}</p>
      <p>Preço: R${produto.preco}</p>
      

      <img
        src={imagem} width = "300"
        alt={produto.nome}
      />

      <br/>

      <a href={link}>
        Acessar</a> <br/>
      
      <input placeholder ="Escreva algo aqui"></input>

      {/* <p>Desconto: R$ {desconto * 100}%</p>
      <p>Preço final: R$ {preco - preco * desconto}</p> */}

      </div>
  ) 
}

export default App;
