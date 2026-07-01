import { useState, useRef } from 'react';
import api from '../../../services/api';
import './manipularProfessores.css';

function ManipularProfessores() {
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

    async function cadastrarProfessor() {
        try {
            await api.post('/cadprof', {
                nome: cadastroNome.current.value,
                matricula: cadastroMatricula.current.value,
                email: cadastroEmail.current.value,
                senha: cadastroSenha.current.value,
            });
            cadastroNome.current.value = '';
            cadastroMatricula.current.value = '';
            cadastroEmail.current.value = '';
            cadastroSenha.current.value = '';
            mostrarMensagem('Professor cadastrado com sucesso');
        } catch (error) {
            console.error(error);
            mostrarMensagem('Erro ao cadastrar professor');
        }
    }

    async function atualizarProfessor() {
        try {
            await api.put('/atualizaprof', {
                id: editarId.current.value,
                nome: editarNome.current.value,
                email: editarEmail.current.value,
                senha: editarSenha.current.value,
            });
            editarId.current.value = '';
            editarNome.current.value = '';
            editarEmail.current.value = '';
            editarSenha.current.value = '';
            mostrarMensagem('Professor atualizado com sucesso');
        } catch (error) {
            console.error(error);
            mostrarMensagem('Erro ao atualizar professor');
        }
    }

    async function deletarProfessor() {
        try {
            await api.post('/deletprof', {
                id: deletarId.current.value,
            });
            deletarId.current.value = '';
            mostrarMensagem('Professor deletado com sucesso');
        } catch (error) {
            console.error(error);
            mostrarMensagem('Erro ao deletar professor');
        }
    }

    return (
        <div>
            <button onClick={voltar}>voltar</button>
            <h1>Manipular Professores</h1>
            {resposta && <p>{resposta}</p>}
            <section>
                <div>
                    <h2>Cadastrar professor</h2>
                    <input ref={cadastroNome} placeholder="Nome" />
                    <input ref={cadastroMatricula} placeholder="Matrícula" />
                    <input ref={cadastroEmail} placeholder="Email" />
                    <input ref={cadastroSenha} placeholder="Senha" type="password" />
                    <button onClick={cadastrarProfessor}>Cadastrar</button>
                </div>
            </section>
            <section>
                <div>
                    <h2>Atualizar professor</h2>
                    <input ref={editarId} placeholder="ID" />
                    <input ref={editarNome} placeholder="Novo nome" />
                    <input ref={editarEmail} placeholder="Novo email" />
                    <input ref={editarSenha} placeholder="Nova senha" type="password" />
                    <button onClick={atualizarProfessor}>Atualizar</button>
                </div>
            </section>
            <section>
                <div>
                    <h2>Deletar professor</h2>
                    <input ref={deletarId} placeholder="ID" />
                    <button onClick={deletarProfessor}>Deletar</button>
                </div>
            </section>
        </div>
    );
}

export default ManipularProfessores;
