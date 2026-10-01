import { useNavigate } from "react-router-dom"; // Importa o useNavigate para mudar de página pelo código

function FeaturedMovie({ movie }) { // Recebe o filme em destaque por props
const navigate = useNavigate(); // Cria a função navigate para redirecionar o usuário

  if (!movie) { // Verifica se não existe filme em destaque
    return null; // Se não tiver filme, não mostra nada na tela
  }

  return (
    <section
      className="featured" // Classe CSS da área do filme em destaque
      style={{
        backgroundImage: `linear-gradient(to right, #111 30%, transparent), url(${movie.bannerImage})` // Define a imagem de fundo com um degradê escuro por cima
      }}
    >
      <div className="featured-content"> {/* Área do texto do filme em destaque */}
        <h2>{movie.title}</h2> {/* Mostra o título do filme */}
        <p>{movie.description}</p> {/* Mostra a descrição do filme */}

        <div className="featured-buttons"> {/* Área dos botões */}
          <button>Assistir</button> {/* Botão visual de assistir */}
          <button onClick={() => navigate(`/movie/${movie.id}`)}> {/* Ao clicar, vai para a página de detalhes do filme */}
            Ver detalhes
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovie; // Exporta o componente FeaturedMovie para ser usado em outras páginas