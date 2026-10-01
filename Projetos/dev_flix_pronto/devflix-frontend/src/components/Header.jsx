function Header() {
  return (
    <header className="header"> {/* Cabeçalho principal da página */}
      <h1>DEVFLIX</h1> {/* Logo ou nome da plataforma */}

      <nav> {/* Menu de navegação */}
        <a href="#filmes">Filmes</a> {/* Link para a seção de filmes */}
        <a href="#series">Séries</a> {/* Link para a seção de séries */}
        <a href="#documentarios">Documentários</a> {/* Link para a seção de documentários */}
      </nav>
    </header>
  );
}

export default Header; 