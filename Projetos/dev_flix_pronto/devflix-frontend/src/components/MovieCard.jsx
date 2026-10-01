import { useNavigate } from "react-router-dom"; // Importa o useNavigate para mudar de página pelo código

function MovieCard({ movie }) { // Recebe as informações do filme por props
  const navigate = useNavigate(); // Cria a função navigate para redirecionar o usuário

  return (
    <div
      className="movie-card" // Classe CSS do card do filme
      onClick={() => navigate(`/movie/${movie.id}`)} // Ao clicar no card, vai para a página de detalhes do filme
    >
      <img src={movie.coverImage} alt={movie.title} /> {/* Mostra a imagem de capa do filme */}
      <h3>{movie.title}</h3> {/* Mostra o título do filme */}
      <span>{movie.type}</span> {/* Mostra o tipo: filme, série ou documentário */}
    </div>
  );
}

export default MovieCard; // Exporta o componente MovieCard para ser usado em outros arquivos
