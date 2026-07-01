import { useEffect, useState } from 'react';
import api from '../../../services/api';
import './verIntermediaria.css';

function VerIntermediaria() {
    const [registros, setRegistros] = useState([]);

    function voltar() {
        window.location.href = '/';
    }

    useEffect(() => {
        async function buscarRegistros() {
            try {
                const response = await api.get('/verIntermediaria');
                setRegistros(response.data);
            } catch (error) {
                console.error('Erro ao buscar intermediária:', error);
            }
        }

        buscarRegistros();
    }, []);

    return (
        <div>
            <button onClick={voltar}>voltar</button>
            <h1>Ver tabela intermediária</h1>
            <ul>
                {registros.map((registro) => {
                    const professor = registro.cadprof?.nome || registro.professores;
                    const aluno = registro.cadaluno?.nome || registro.alunos;
                    const edital = registro.Editai?.nome || registro.Editais?.nome || registro.editais;
                    const carga_minima = registro.Editai?.carga_minima;

                    return (
                        <li key={registro.id || `${registro.professores}-${registro.alunos}-${registro.editais}`}>
                            <strong>Professor:</strong> {professor} <br />
                            <strong>Aluno:</strong> {aluno} <br />
                            <strong>Edital:</strong> {edital} <br />
                            <strong>Carga horária mínima:</strong> {carga_minima}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default VerIntermediaria;
