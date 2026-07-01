import { useRef, useState } from 'react';
import api from '../../../services/api';
import './manipularTempo.css';

function ManipularTempo() {
    const [resposta, setResposta] = useState('');

    const cadastroIdInter = useRef();
    const cadastroHoraInicio = useRef();
    const cadastroHoraFinal = useRef();

    const editarId = useRef();
    const editarIdInter = useRef();
    const editarHoraInicio = useRef();
    const editarHoraFinal = useRef();

    const deletarId = useRef();

    function mostrarMensagem(mensagem) {
        setResposta(mensagem);
        setTimeout(() => setResposta(''), 3000);
    }

    function voltar() {
        window.location.href = '/';
    }

    async function cadastrarTempo() {
        try {
            await api.post('/tempoCadastro', {
                id_inter: cadastroIdInter.current.value,
                hora_inicio: cadastroHoraInicio.current.value,
                hora_final: cadastroHoraFinal.current.value,
            });

            cadastroIdInter.current.value = '';
            cadastroHoraInicio.current.value = '';
            cadastroHoraFinal.current.value = '';

            mostrarMensagem('Tempo cadastrado com sucesso');
        } catch (error) {
            console.error('Erro ao cadastrar tempo:', error);
            mostrarMensagem('Erro ao cadastrar tempo');
        }
    }

    async function atualizarTempo() {
        try {
            await api.put('/atualizarTempo', {
                id: editarId.current.value,
                id_inter: editarIdInter.current.value,
                hora_inicio: editarHoraInicio.current.value,
                hora_final: editarHoraFinal.current.value,
            });

            editarId.current.value = '';
            editarIdInter.current.value = '';
            editarHoraInicio.current.value = '';
            editarHoraFinal.current.value = '';

            mostrarMensagem('Tempo atualizado com sucesso');
        } catch (error) {
            console.error('Erro ao atualizar tempo:', error);
            mostrarMensagem('Erro ao atualizar tempo');
        }
    }

    async function deletarTempo() {
        try {
            await api.post('/deletarTempo', {
                id: deletarId.current.value,
            });

            deletarId.current.value = '';
            mostrarMensagem('Tempo deletado com sucesso');
        } catch (error) {
            console.error('Erro ao deletar tempo:', error);
            mostrarMensagem('Erro ao deletar tempo');
        }
    }

    return (
        <div>
            <button onClick={voltar}>voltar</button>
            <h1>Manipular Tempo</h1>
            {resposta && <p>{resposta}</p>}

            <section>
                <h2>Cadastrar tempo</h2>
                <input ref={cadastroIdInter} placeholder="ID da intermediária" type="number" />
                <input ref={cadastroHoraInicio} placeholder="Hora de início" type="datetime-local" />
                <input ref={cadastroHoraFinal} placeholder="Hora final" type="datetime-local" />
                <button onClick={cadastrarTempo}>Cadastrar</button>
            </section>

            <section>
                <h2>Atualizar tempo</h2>
                <input ref={editarId} placeholder="ID do registro" type="number" />
                <input ref={editarIdInter} placeholder="Novo ID da intermediária" type="number" />
                <input ref={editarHoraInicio} placeholder="Nova hora de início" type="datetime-local" />
                <input ref={editarHoraFinal} placeholder="Nova hora final" type="datetime-local" />
                <button onClick={atualizarTempo}>Atualizar</button>
            </section>

            <section>
                <h2>Deletar tempo</h2>
                <input ref={deletarId} placeholder="ID do registro" type="number" />
                <button onClick={deletarTempo}>Deletar</button>
            </section>
        </div>
    );
}

export default ManipularTempo;
