import { useState, useRef } from 'react';
import api from '../../../services/api';
import './manipularAlunos.css';

function ManipularAlunos() {
  const [resposta, setResposta] = useState('');
  const cadastroNome = useRef();
  const cadastroMatricula = useRef();
  const cadastroEmail = useRef();
  const cadastroSenha = useRef();

  const deletarId = useRef();
  const editarId = useRef();
  const editarNome = useRef();
  const editarEmail = useRef();
  const editarSenha = useRef();

  function mostrarMensagem(mensagem) {
    setResposta(mensagem);
    setTimeout(() => setResposta(''), 3000);
  }

  function voltar() {
    window.location.href = '/';
  }

  async function cadastrarAluno() {
    try {
      await api.post('/cadalunos', {
        nome: cadastroNome.current.value,
        matricula: cadastroMatricula.current.value,
        email: cadastroEmail.current.value,
        senha: cadastroSenha.current.value,
      });
      cadastroNome.current.value = '';
      cadastroMatricula.current.value = '';
      cadastroEmail.current.value = '';
      cadastroSenha.current.value = '';
      mostrarMensagem('Aluno cadastrado com sucesso');
    } catch (error) {
      console.error(error);
      mostrarMensagem('Erro ao cadastrar aluno');
    }
  }

  async function atualizarAluno() {
    try {
      await api.put('/atualizaalun', {
        id: editarId.current.value,
        nome: editarNome.current.value,
        email: editarEmail.current.value,
        senha: editarSenha.current.value,
      });
      editarId.current.value = '';
      editarNome.current.value = '';
      editarEmail.current.value = '';
      editarSenha.current.value = '';
      mostrarMensagem('Aluno atualizado com sucesso');
    } catch (error) {
      console.error(error);
      mostrarMensagem('Erro ao atualizar aluno');
    }
  }

  async function deletarAluno() {
    try {
      await api.post('/deletaluno', {
        id: deletarId.current.value,
      });
      deletarId.current.value = '';
      mostrarMensagem('Aluno deletado com sucesso');
    } catch (error) {
      console.error(error);
      mostrarMensagem('Erro ao deletar aluno');
    }
  }

  return (
    <div>
      <button onClick={voltar}>voltar</button>
      <h1>Manipular Alunos</h1>
      {resposta && <p>{resposta}</p>}
      <section>
        <h2>Cadastrar aluno</h2>
        <input ref={cadastroNome} placeholder="Nome" />
        <input ref={cadastroMatricula} placeholder="Matrícula" />
        <input ref={cadastroEmail} placeholder="Email" />
        <input ref={cadastroSenha} placeholder="Senha" type="password" />
        <button onClick={cadastrarAluno}>Cadastrar</button>
      </section>
      <section>
        <h2>Atualizar aluno</h2>
        <input ref={editarId} placeholder="ID" />
        <input ref={editarNome} placeholder="Novo nome" />
        <input ref={editarEmail} placeholder="Novo email" />
        <input ref={editarSenha} placeholder="Nova senha" type="password" />
        <button onClick={atualizarAluno}>Atualizar</button>
      </section>
      <section>
        <h2>Deletar aluno</h2>
        <input ref={deletarId} placeholder="ID" />
        <button onClick={deletarAluno}>Deletar</button>
      </section>
    </div>
  );
}

export default ManipularAlunos;
