function Home() {

    function GoToCadastro() {
        window.location.href = "/manipular-editais";
    };

    function GoToViews() {
      window.location.href = "/ver-editais"
    }

    function GoToAlunos() {
      window.location.href = "/manipular-alunos"
    }

    function GoToVerAlunos() {
      window.location.href = "/ver-alunos"
    }

  return (
    <div>
      <h1>Bem-vindo à página inicial!</h1>
      <p>Esta é a página inicial do seu aplicativo.</p>
      <ul>
        <li><button onClick={ GoToCadastro }>Ir para Manipular Editais</button></li>
        <li><button onClick={ GoToViews } > Ver Editais</button></li>
        <li><button onClick={ GoToAlunos }> cadastrar alunos </button></li>
        <li><button onClick={ GoToVerAlunos }> Ver cadastros de alunos </button></li>
      </ul>
    </div>
  );
}

export default Home;