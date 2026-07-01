import { useEffect, useState } from 'react';
import api from '../../../services/api';
import './verTempo.css';

function VerTempo() {
    const [tempos, setTempos] = useState([]);

    function voltar() {
        window.location.href = '/';
    }

    useEffect(() => {
        async function buscarTempos() {
            try {
                const response = await api.get('/verTempo');
                setTempos(response.data);
            } catch (error) {
                console.error('Erro ao buscar tempos:', error);
            }
        }

        buscarTempos();
    }, []);

    return (
        <div>
            <button onClick={voltar}>voltar</button>
            <h1>Ver registros de tempo</h1>
            <ul>
                {tempos.map((tempo) => {
                    const intermediaria = tempo.Intermediaria;
                    const professor = intermediaria?.cadprof?.nome || intermediaria?.professores || 'Não informado';
                    const aluno = intermediaria?.cadaluno?.nome || intermediaria?.alunos || 'Não informado';
                    const edital = intermediaria?.Editai?.nome || intermediaria?.Editais?.nome || 'Não informado';
                    const cargaMinima = intermediaria?.Editai?.carga_minima ?? intermediaria?.Editais?.carga_minima ?? 'Não informado';

                    return (
                        <li key={tempo.id}>
                            <strong>ID:</strong> {tempo.id} <br />
                            <strong>Intermediária:</strong> {tempo.id_inter} <br />
                            <strong>Professor:</strong> {professor} <br />
                            <strong>Aluno:</strong> {aluno} <br />
                            <strong>Edital:</strong> {edital} <br />
                            <strong>Carga mínima:</strong> {cargaMinima} <br />
                            <strong>Início:</strong> {tempo.hora_inicio} <br />
                            <strong>Fim:</strong> {tempo.hora_final}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default VerTempo;
