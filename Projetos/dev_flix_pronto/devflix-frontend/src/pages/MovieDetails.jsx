// Importa useEffect e useState do React
import { useEffect, useState } from "react";

// Importa useParams para pegar o id da URL
// Importa useNavigate para navegar entre páginas pelo código
import { useParams, useNavigate } from "react-router-dom";

// Importa o componente Header
import Header from "../components/Header";

// Cria o componente da página de detalhes do filme
function MovieDetails() {
  // Pega o parâmetro id que vem da URL
  // Exemplo: /movies/2 → id será 2
  const { id } = useParams();

  // Cria a função usada para redirecionar o usuário
  const navigate = useNavigate();

  // Estado que guarda os dados do filme buscado na API
  const [movie, setMovie] = useState(null);

  // Estado que controla se os dados ainda estão carregando
  const [loading, setLoading] = useState(true);

  // Executa quando a página carrega ou quando o id muda
  useEffect(() => {
    // Função assíncrona para buscar o filme no backend
    async function loadMovie() {
      try {
        // Faz uma requisição para buscar um filme específico pelo id
        const response = await fetch(
          `http://localhost:3000/movies/${id}`
        );

        // Converte a resposta do backend para objeto JavaScript
        const data = await response.json();

        // Salva os dados do filme no estado movie
        setMovie(data);
      } catch (error) {
        // Mostra erro no console caso não consiga conectar com o backend
        console.log("Erro ao buscar filme:", error);
      } finally {
        // Finaliza o carregamento, dando certo ou dando erro
        setLoading(false);
      }
    }

    // Chama a função que busca o filme
    loadMovie();
  }, [id]); // Roda novamente se o id da URL mudar

  // Enquanto o filme está carregando, mostra uma mensagem na tela
  if (loading) {
    return (
      <div>
        <Header />

        <div className="details-page">
          <h2>Carregando filme...</h2>
        </div>
      </div>
    );
  }

  // Se não encontrou o filme ou se a API retornou uma mensagem de erro
  if (!movie || movie.message) {
    return (
      <div>
        <Header />

        <div className="details-page">
          <h2>Filme não encontrado</h2>

          {/* Botão para voltar para a página Home */}
          <button onClick={() => navigate("/home")}>
            Voltar
          </button>
        </div>
      </div>
    );
  }

  // Se o filme foi encontrado, mostra os detalhes na tela
  return (
    <div>
      <Header />

      {/* 
        Section principal da página de detalhes.
        O background usa a imagem do banner do filme.
      */}
      <section
        className="details-page"
        style={{
          backgroundImage: `linear-gradient(to right, #111 40%, transparent), url(${movie.bannerImage})`
        }}
      >
        <div className="details-content">
          {/* Título do filme */}
          <h1>{movie.title}</h1>

          {/* Descrição do filme */}
          <p>{movie.description}</p>

          {/* Categoria e tipo do filme */}
          <span>Categoria: {movie.category}</span>
          <span>Tipo: {movie.type}</span>

          <div className="details-buttons">
            {/* Botão visual, ainda sem função real de player */}
            <button>Assistir agora</button>

            {/* Botão que volta para a Home */}
            <button onClick={() => navigate("/home")}>
              Voltar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Exporta o componente para ser usado nas rotas
export default MovieDetails;