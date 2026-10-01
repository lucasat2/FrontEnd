// Importa o useState, usado para criar estados no React
import { useState } from "react";

// Importa o useNavigate, usado para trocar de página pelo código
import { useNavigate } from "react-router-dom";

// Importa o arquivo de estilos CSS
import "../index.css";

// Cria o componente Login
function Login() {
  // Estado que guarda o email digitado pelo usuário
  const [email, setEmail] = useState("");

  // Estado que guarda a senha digitada pelo usuário
  const [password, setPassword] = useState("");

  // Cria a função de navegação entre páginas
  const navigate = useNavigate();

  // Função executada quando o formulário for enviado
  async function handleLogin(event) {
    // Impede a página de recarregar ao enviar o formulário
    event.preventDefault();

    try {
      // Envia uma requisição POST para o backend
      const response = await fetch("http://localhost:3000/login", {
        // Define que estamos enviando dados para o servidor
        method: "POST",

        // Informa que os dados enviados estão em formato JSON
        headers: {
          "Content-Type": "application/json"
        },

        // Converte email e senha para JSON antes de enviar
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      // Converte a resposta do backend para objeto JavaScript
      const data = await response.json();

      // Se o backend retornar sucesso, manda o usuário para /home
      if (data.success === true) {
        navigate("/home");
      } else {
        // Se o login falhar, mostra a mensagem enviada pelo backend
        alert(data.message);
      }
    } catch (error) {
      // Executa se não conseguir conectar com o backend
      alert("Erro ao conectar com o backend");

      // Mostra o erro completo no console para ajudar na correção
      console.log(error);
    }
  }

  // Retorna o HTML/JSX da tela de login
  return (
    <div className="login-page">
      {/* Formulário de login */}
      {/* Quando enviado, chama a função handleLogin */}
      <form className="login-box" onSubmit={handleLogin}>
        <h1>DEVFLIX</h1>
        <h2>Entrar</h2>

        {/* Campo de email */}
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        {/* Campo de senha */}
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {/* Botão que envia o formulário */}
        <button type="submit">Entrar</button>

        {/* Texto auxiliar para testes */}
        <p className="login-help">
          Use: user@devflix.com / 123456
        </p>
      </form>
    </div>
  );
}

// Exporta o componente para ser usado em outras partes do projeto
export default Login;