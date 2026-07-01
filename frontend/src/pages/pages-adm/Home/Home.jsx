import './home.css';

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

    function GoToProfessores() {
      window.location.href = "/manipular-professores"
    }

    function GoToVerProfessores() {
      window.location.href = "/ver-professores"
    }

    function GoToIntermediaria() {
      window.location.href = "/manipular-intermediaria"
    }

    function GoToVerIntermediaria() {
      window.location.href = "/ver-intermediaria"
    }

    function GoToTempo() {
      window.location.href = "/manipular-tempo"
    }

    function GoToVerTempo() {
      window.location.href = "/ver-tempo"
    }

  return (
    <div className="home-page">
      <h1>Bem-vindo à página inicial!</h1>
      <p>Esta é a página inicial do seu aplicativo.</p>
      <ul>
        <li><button onClick={ GoToCadastro }>Ir para Manipular Editais</button></li>
        <li><button onClick={ GoToViews } > Ver Editais</button></li>
        <li><button onClick={ GoToAlunos }> cadastrar alunos </button></li>
        <li><button onClick={ GoToVerAlunos }> Ver cadastros de alunos </button></li>
        <li><button onClick={ GoToProfessores }> cadastrar professores </button></li>
        <li><button onClick={ GoToVerProfessores }> Ver cadastros de professores </button></li>
        <li><button onClick={ GoToIntermediaria }> cadastrar intermediária </button></li>
        <li><button onClick={ GoToVerIntermediaria }> ver intermediária </button></li>
        <li><button onClick={ GoToTempo }> cadastrar tempo </button></li>
        <li><button onClick={ GoToVerTempo }> ver tempo </button></li>
      </ul>
    </div>
  );
}

export default Home;