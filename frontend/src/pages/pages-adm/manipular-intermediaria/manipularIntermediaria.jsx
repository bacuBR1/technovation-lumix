import { useRef, useState } from 'react';
import api from '../../../services/api';
import './manipularIntermediaria.css';

function ManipularIntermediaria() {
    const [resposta, setResposta] = useState('');
    const professoresId = useRef();
    const alunosId = useRef();
    const editaisId = useRef();

    function mostrarMensagem(mensagem) {
        setResposta(mensagem);
        setTimeout(() => setResposta(''), 3000);
    }

    function voltar() {
        window.location.href = '/';
    }

    async function cadastrarIntermediaria() {
        try {
            await api.post('/intermediariaCadastro', {
                professores: professoresId.current.value,
                alunos: alunosId.current.value,
                editais: editaisId.current.value,
            });
            professoresId.current.value = '';
            alunosId.current.value = '';
            editaisId.current.value = '';
            mostrarMensagem('Registro intermediário cadastrado com sucesso');
        } catch (error) {
            console.error('Erro ao cadastrar intermediária:', error);
            mostrarMensagem('Erro ao cadastrar registro intermediário');
        }
    }

    return (
        <div>
            <button onClick={voltar}>voltar</button>
            <h1>Manipular Intermediária</h1>
            {resposta && <p>{resposta}</p>}
            <section>
                <h2>Cadastrar associação</h2>
                <input ref={professoresId} placeholder="ID do professor" type="number" />
                <input ref={alunosId} placeholder="ID do aluno" type="number" />
                <input ref={editaisId} placeholder="ID do edital" type="number" />
                <button onClick={cadastrarIntermediaria}>Cadastrar</button>
            </section>
        </div>
    );
}

export default ManipularIntermediaria;
