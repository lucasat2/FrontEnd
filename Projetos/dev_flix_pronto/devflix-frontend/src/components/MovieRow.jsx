import MovieCard from "./MovieCard"; // Importa o componente que mostra cada card de filme

function MovieRow({ title, movies }) { // Recebe o título da categoria e a lista de filmes por props
  if (movies.length === 0) { // Verifica se a lista de filmes está vazia
    return null; // Se não tiver filmes, não mostra essa fileira na tela
  }

  return (
    <section className="movie-row"> {/* Seção de uma categoria de filmes */}
      <h2>{title}</h2> {/* Mostra o nome da categoria */}

      <div className="movie-list"> {/* Área onde os cards dos filmes ficam organizados */}
        {movies.map((movie) => ( // Percorre a lista de filmes
          <MovieCard key={movie.id} movie={movie} /> // Mostra um card para cada filme
        ))}
      </div>
    </section>
  );
}

export default MovieRow; // Exporta o componente MovieRow para ser usado em outras páginas
