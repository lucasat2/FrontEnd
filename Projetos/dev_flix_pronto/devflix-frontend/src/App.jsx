// Importa as ferramentas de rotas do React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa as páginas que serão usadas nas rotas
import Login from "./pages/Login";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    
    <BrowserRouter>

      {/* Routes agrupa todas as rotas da aplicação */}
      <Routes>

        {/* Rota da tela inicial/login */}
        <Route path="/" element={<Login />} />

        {/* Rota da página principal após o login */}
        <Route path="/home" element={<Home />} />

        {/* 
          Rota da página de detalhes do filme.
          O :id representa o id do filme que vem pela URL.
          Exemplo: /movie/1
        */}
        <Route path="/movie/:id" element={<MovieDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

// Exporta o App para ser usado no main.jsx
export default App;