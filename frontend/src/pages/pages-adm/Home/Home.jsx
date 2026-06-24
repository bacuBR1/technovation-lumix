function Home() {

    function GoToCadastro() {
        window.location.href = "/manipular-editais";
    };

  return (
    <div>
      <h1>Bem-vindo à página inicial!</h1>
      <p>Esta é a página inicial do seu aplicativo.</p>
      <button onClick={ GoToCadastro }>Ir para Manipular Editais</button>
    </div>
  );
}

export default Home;